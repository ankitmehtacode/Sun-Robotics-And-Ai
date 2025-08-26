const Test = () => {
  console.log('Test component rendered');
  
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Test Page</h1>
        <p className="text-lg">If you can see this, React is working!</p>
      </div>
    </div>
  );
};

export default Test;