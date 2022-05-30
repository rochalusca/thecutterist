function Home() {
    return (
    
    <div>   
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/030/047/original/thecutterist_icon.png?1648202515" type ="image/x-icon">
    <title>TheCutterist</title>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');

    body {
      font-family: 'Montserrat', sans-serif;    
      text-align: center;
      background: linear-gradient(to top, #EECAAB 0%, #DAD3C8 100%);
      margin: 0px;
    }

    h1 {
      text-align: center;
      margin: 0px;
    }

    h2 {
      text-align: center;
      border: 1px solid #EECAAB;
      background-color: #EECAAB;
      padding: 5px;
    }

    p {
      text-align: justify;
      font-size: medium;
      font-weight: normal;
      line-height: normal;
      color:black;
    }

    span {
      font-style: oblique;
    }

    footer {
      font-size: 13px;
      margin: 20px;
     }

    a:link {
      text-decoration: none;
      color:#381514
    }

    a:visited{
      color:#381514
    }

    a:hover {
      color: #EECAAB;
    }

    .coder:link {
      text-decoration: underline;
    }
    .coder:hover {
      color: #381514;
      font-weight: bolder;
      
    }

    .shop-now {
      padding: 10px;
      margin: 10px;
      text-decoration: none;
      border: none;
      border-radius: 10px;
      background: #D2A76D;
      color: #381514;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      transition: all 200ms ease-in-out;
    }

    .shop-now:hover {
      cursor: pointer;
      text-decoration: none;
      opacity: 0.9;
    }
      
    .follow-us {        
      padding: 10px;
      margin: 10px;
      text-decoration: none;
      border: none;
      border-radius: 10px;
      background: #D2A76D;
      color: #381514;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      transition: all 200ms ease-in-out;
    }

    .follow-us:hover{
      cursor: pointer;
      text-decoration: none;
      opacity: 0.9;
    }

    .get-in-touch {
      padding: 10px;
      margin: 10px;
      text-decoration: none;
      border: none;
      border-radius: 10px;
      background: #D2A76D;
      color: #381514;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      transition: all 200ms ease-in-out;
    }

    .get-in-touch:hover {
      cursor: pointer;
      text-decoration: none;
      opacity: 0.9;
      color:#EECAAB;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
    }

    .logo {
      display: block;
      margin: 0 auto 30px;
      max-width: 100%;
    }

    .column {
      float: left;
      width: 50%;
      border-radius: 20px;
    }

    .row {
      border-radius: 20px;
    }

    .row::after {
      content: "";
      clear: both;
      display: table;
    }

    </style>

  </head>
  <body>
    <div class="container">
      <h1>
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/029/910/original/thecutterist_logo.png?1648036878"
          alt="The Cutterist logo"
          class="logo"/>
      </h1>
      <h2>✨Special Design <span>Cutters</span>✨ 💎Clay Jewellery <span>Cutters</span>💎</h2>
      <p>
        ❤️ Cutters produced with love for using in jewellery making (or anything
        else you wish) for you and your shop.<br /><br />
        🏢 We use 3D printer to create and produce the cutters, our little
        studio is born and based in Manchester, UK. <br /><br />
        ♻️ The raw material used to produce the cutters is PLA Biodegrable
        Plastic, they are very resistant and durable. <br /><br />
        🎯 Our main objective is to help you, offering special design cutters,
        to make your jewellery even more fantastic! <br /><br />
        <div class="row">
        <div class="column">
        <img class="ladybird-cutter"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/029/915/original/ladybird_cutter.png?1648039413"
          alt="Ladybird Clay Cutter" 
          style="width: 100%">
        </div>
        <div class="column">
        <img class="ladybird-clay" 
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/029/916/original/ladybird_cutter2.png?1648039446"
        alt="Ladybird Clay Cutter2" 
        style="width:100%">
        </div></div>
        <br />                
        </p>
        <button class="shop-now">
          <a href="https://www.etsy.com/uk/shop/TheCutterist" target="_blank" 
            ><strong>Shop Now</strong></a>
        </button>
        <button class="follow-us">
          <a href="https://www.instagram.com/thecutterist/" target="_blank"><strong>Follow Us</strong></a>                        
        </button>
        <button class="get-in-touch"><strong>Get in touch</strong></button>
        <footer><em>This page was built by </em> <a href="https://www.linkedin.com/in/flavia-hotts-5053b826/" target="_blank" class="coder">Flavia Hotts</a> 👩🏻‍💻</footer>
    </div>
      <script>
      function contact() {
        let email = prompt("What is your email address?");
        if (email.length) {
        alert("Thank you, we'll be in touch soon 👋.");          
        } else {
          alert ("Sorry, no email address, no message! Try again, please.");                     
        }  
      }

      let getInTouch = document.querySelector(".get-in-touch");
      getInTouch.addEventListener("click", contact);
      </script>
  </body>

</div>

)
}

export default Home 

