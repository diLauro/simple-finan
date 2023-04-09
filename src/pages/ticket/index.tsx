import axios from "axios";

export default function Ticket()  {
    axios({
        method: "get",
        url: "https://brapi.dev/api/quote/TAEE11?range=1d&interval=1d&fundamental=true&dividends=true",
      }).then(function (response) {
        console.log(response)
      });

    return (
        <>
            <h1>Teste</h1>
        </>
    )
}