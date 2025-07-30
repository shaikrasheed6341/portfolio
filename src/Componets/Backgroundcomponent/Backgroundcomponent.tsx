const Backgroundcomponent = () => {
  return (
    <div className="fixed top-0 left-0 z-[-2] h-full w-full min-h-screen bg-gradient-to-br from-zinc-950 via-slate-950 to-zinc-900">
      {/* Subtle grid pattern */}
      <div className="absolute top-0 left-0 h-full w-full bg-transparent bg-[radial-gradient(#71717a_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
      
      {/* Gradient overlays for depth */}
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-transparent via-transparent to-zinc-800/20"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-zinc-700/20 to-slate-600/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-slate-700/20 to-zinc-600/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-zinc-800/20 to-slate-700/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default Backgroundcomponent;
  