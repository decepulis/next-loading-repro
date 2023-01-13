export default async function GuidePage({ params }) {
  const data = await new Promise((resolve) => { setTimeout(resolve({ params }), 1500); });

  return (
    <div className="max-w-4xl mt-2.5 md:mt-10 px-4 md:px-12 lg:px-15 overflow-x-hidden min-h-screen">
      <p>
        {JSON.stringify(data)}
      </p>
    </div>

  );
}
