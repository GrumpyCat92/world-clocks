export default function Form({ handleCreate, form, setForm }) {
  const changeName = ({ target }) => {
    setForm({
      name: target.value,
      timezone: form.timezone,
    });
  };

  const changeTimezone = ({ target }) => {
    setForm({
      name: form.name,
      timezone: target.value,
    });
  };

  return (
    <form onSubmit={handleCreate}>
      <input value={form.name} onChange={changeName}></input>
      <input value={form.timezone} onChange={changeTimezone}></input>
      <button>Добавить</button>
    </form>
  );
}
