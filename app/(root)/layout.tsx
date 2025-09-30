const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen text-gray-400 ">
      {/* Navbar */}
      <div className="container py-10">{children}</div>
    </main>
  );
};

export default layout;
