/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme:{
      screens:{
        'ss':'400px',
        'xs':'480px',
        'sm':'640px',
        'md':'768px',
        'lg':'1024px',
        'xl':'1280px',
      },
      extend: {
        colors: {
          primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554", "1000":"#2484C2", "10":"#2DA5F3"},
          qoramtir:{"50":"rgba(0, 0, 0, 0.88)", "600":"rgb(60, 60, 60)", "qizil":"rgb(212, 67, 68)", "gray":"rgb(240, 240, 240)", "gray":"#475156", "gray1" : "#5F6C72" }
        },
        backgroundColor:{
          yellow:{"100" : "#F7E99E", "200" : "#EFD33D"},
          category:{"aqua":"rgb(244, 254, 255)", "10":"#F2F4F5"},
          orange:{"100":"#FA8232"},
          gray:{"150":"#F2F4F5"},
          kok:{"10":"#EAF6FE", "20":"#EAF7E9"}
        },
        boxShadow:{
          '3xl':"0px 9px 19.3px 0px #0000001F"
        }
      }
    },
    
    plugins: [],
  };