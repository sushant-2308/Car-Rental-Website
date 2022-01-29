import "./Razorpay.css";
import { useCookies } from 'react-cookie'


function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

async function Razorpay(contact) {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  // const [razorpayCookies, setRazorpayCookie] = useCookies(['x-razorpay-payment-done']);
  const [cookies, setCookie] = useCookies(['x-razorpay-payment-done']);
  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  const data = await fetch("http://localhost:3000/razorpay", {
    method: "POST",
  }).then((t) => t.json());

  console.log(data);

  const options = {
    key: __DEV__ ? "rzp_test_Kb5Tzqts0BLbP2" : "PRODUCTION_KEY",
    currency: data.currency,
    amount: data.amount.toString(),
    order_id: data.id,
    name: "Car Booking",
    description: "Thank you for nothing. Please give us some money",
    image: "http://localhost:3000/logo.svg",
    handler: function (response) {
         fetch("http://localhost:3000/sendmessage", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
               'Access-Control-Allow-Origin': '*'
              },
            body: JSON.stringify({
              message: `Hi, I have paid ${data.amount * 0.01} ${data.currency} for booking your car. Thank you.`,
              mobile_number: contact,
            }),
          }).then((t) => console.log("sm sent" + t +" " + contact))
          .catch((e) => console.log("sm failed" + e));
          // cookie.set("x-razorpay-payment-done", true, {path: "/invoice"});
          setCookie('x-razorpay-payment-done', true, { path: '/invoice' });
    },
    prefill: {
      name: "Satvik",
      email: "satvikshrivas26@gmail.com",
      phone_number: "9899999999",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

export default Razorpay;
