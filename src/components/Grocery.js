const Grocery = () => {
  return (
    <h1>
      Our grocery online store, and we have a lot of child components inside
      this web page!!! And we are having different bundle of out groceries
      components. It is known as CHUNKING, CODE SPLITTING, DYNAMIC BUNDLING,
      DYNAMIC IMPORTING and LAZY LOADING(ON DEMAND LOADING) because app will
      only load Grocery code and its component when we go to 'order grocery'
      link and our menu's app will not have grocery bundle before that
    </h1>
  );
};

export default Grocery;
