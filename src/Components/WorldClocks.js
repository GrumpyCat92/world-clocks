import { useState } from "react";
import shortid from "shortid";
import Clock from "./Clock";
import Form from "./Form";

export default function WorldClocks() {
  const [clocks, setClocks] = useState([]);
  const [form, setForm] = useState({
    name: "",
    timezone: "",
    id: "",
  });

  const addClock = (e) => {
    e.preventDefault();
    setForm({
      name: "",
      timezone: "",
      id: "",
    });
    setClocks([
      ...clocks,
      {
        name: form.name,
        timezone: form.timezone,
        id: shortid.generate(),
      },
    ]);
  };

  const deleteClock = (id) => {
    setClocks((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <>
      <Form form={form} setForm={setForm} handleCreate={addClock} />
      {clocks.map((c) => (
        <Clock
          timezone={c.timezone}
          name={c.name}
          id={c.id}
          deleteClock={deleteClock}
          key={c.id}
        />
      ))}
    </>
  );
}
