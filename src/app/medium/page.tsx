// Server side approach
const items = [
  { id: "1", name: "Item 1" },
  { id: "2", name: "Item 2" },
];

export default function DiscoverTabs() {

  const handleDelete = async (data : FormData) => {
    "use server";
    console.log(data)
    const itemId = data.get("itemId");
  };

  return (
    <div>
      {items.map((el, i) => (
        <>
          <div key={el.id}>{el.name}</div>

          <form action={handleDelete}>
            <input name="itemId" className="hidden" value={el.id}/>
            <button type="submit">Delete</button>
          </form>
        </>
      ))}
    </div>
  );
}
