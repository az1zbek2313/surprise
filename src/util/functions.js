export const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    // Sana qismlarini olamiz
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Oy 0-indekslangan
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    // Formatni yig'amiz
    return `${day}.${month}.${year}`;
  };

  export function formatNumberWithCommas(number) {
    const numStr = String(number);
    
    const formatted = numStr
      .split("")
      .reverse()
      .reduce((acc, digit, index) => {
        if (index > 0 && index % 3 === 0) {
          acc.push(",");
        }
        acc.push(digit);
        return acc;
      }, [])
      .reverse()
      .join("");
  
    return formatted;
  }
  
  export function calculateTotalPrice(products, productDetails) {
    return products.reduce((total, id) => {
      const product = productDetails.find((item) => item._id === id);
      if (product) {
        return total + product.price * product.count;
      }
      return total;
    }, 0);
  }
  