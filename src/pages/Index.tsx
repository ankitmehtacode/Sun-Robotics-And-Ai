import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    console.log('Index component loaded successfully');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sun Robotics & AI</h1>
        <p className="text-xl">Loading...</p>
      </div>
    </div>
  );
};

export default Index;