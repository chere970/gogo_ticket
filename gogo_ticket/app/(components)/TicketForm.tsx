"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { th } from "framer-motion/client";

const TicketForm = () => {
  const router = useRouter();
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "nost started",
    category: "hardware Problem",
  };

  const [formdata, setFormdata] = useState(startingTicketData);

  const handlechange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormdata((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData: formdata }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to create ticket");
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3> Create Your Ticket</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          className="input bg-white"
          onChange={handlechange}
          required={true}
          value={formdata.title}
        />
        <label>description</label>
        <textarea
          id="description"
          name="description"
          className="input bg-white"
          onChange={handlechange}
          required={true}
          value={formdata.description}
          rows={3}
        />
        <label>Category</label>
        <select
          name="category"
          onChange={handlechange}
          value={formdata.category}
          className="input bg-white"
        >
          <option value="hardware Problem">Hardware Problem</option>
          <option value="software Problem">Hardware Problem</option>
          <option value="project">Project </option>
        </select>
        <label>Priority</label>
        <div>
          <input
            id="priority"
            name="priority"
            type="radio"
            value={1}
            onChange={handlechange}
            className="input bg-white w-full"
            checked={formdata.priority == 1}
          />
          <label>1</label>
        </div>
        <div>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            value={2}
            onChange={handlechange}
            className="input bg-white w-full"
            checked={formdata.priority == 2}
          />
          <label>2</label>
        </div>
        <div>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            value={3}
            onChange={handlechange}
            className="input bg-white w-full"
            checked={formdata.priority == 3}
          />
          <label>3</label>
        </div>
        <div>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            value={4}
            onChange={handlechange}
            className="input bg-white w-full"
            checked={formdata.priority == 4}
          />
          <label>4</label>
        </div>
        <div>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            value={5}
            onChange={handlechange}
            className="input bg-white w-full"
            checked={formdata.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formdata.progress}
          min="0"
          max="100"
          onChange={handlechange}
        />
        <label>Status</label>
        <select name="status" value={formdata.status} onChange={handlechange}>
          <option value="not started">Not Started</option>
          <option value=" started"> Started</option>
          <option value="done">done</option>
        </select>
        <input
          type="submit"
          className="bg-blue-500 max-w-xs"
          value="create ticket"
        />
      </form>
    </div>
  );
};

export default TicketForm;
