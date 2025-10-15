<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>full website design </title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">

</head>
<body>
    <header>
        <a href="#" class="logo">THINALI</a>
        <div class="bx bx-menu" id="menu-icon"></div>
        <ul class="navbar">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#contact">Contact</a></li>
            
        </ul>
    </header>
    <section class="home" id="home">
        <div class="home-text">
            <h1>Full Website</h1>
            <h2>Food The <br> Most Precious Things</h2>
            <a href="#menu" class="btn">Today's Menu</a>
        </div>

        <div class="home-img">
            <img src="./images/home.png" alt="">
        </div>
    </section>

    <section class="about" id="about">
        <div class="about-img">
            <img src="./images/menu.png" alt="">
        </div>

        <div class="about-text">
            <span>About Us</span>
            <h2>We speak the good <br> food language</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <a href="#menu" class="btn">Learn More</a>

        </div>
    </section>
    <section class="menu" id="menu">
        <div class="heading">
            <span>Food menu</span>
            <h2>Fresh taste and great price</h2>
        </div>
        <div class="menu-container">
            <div class="box">
                <div class="box-img">
                    <img src="./images/box-removebg-preview.png" alt="">
                </div>
                <h2>Lemon Tart</h2>
                <h3>Tasty Food</h3>
                <span>$10.99</span>
                <i class="bx bx-cart"></i>
            </div>
            <div class="box">
                <div class="box-img">
                    <img src="./images/burger-removebg-preview.png" alt="">
                </div>
                <h2>Burger</h2>
                <h3>Tasty Food</h3>
                <span>$10.99</span>
                <i class="bx bx-cart"></i>
            </div>

            <div class="box">
                <div class="box-img">
                    <img src="./images/panipuri-removebg-preview.png" alt="">
                </div>
                <h2>Pani puri</h2>
                <h3>Tasty Food</h3>
                <span>$10.99</span>
                <i class="bx bx-cart"></i>
            </div>
        </div>

    </section>
    <section class="services" id="services">
        <div class="heading">
            <span>Services</span>
            <h2>We provide best quality food</h2>
        </div>

        <div class="services-container">
            <div class="s-box">
                <img src="./images/services-container-removebg-preview.png" alt="">
                <h3>Order</h3>
                <p>Order your favorite food online and get it delivered to your doorstep.</p>
            </div>

            <div class="s-box">
                <img src="./images/shipping-removebg-preview.png" alt="">
                <h3>Shipping</h3>
                <p>Order your favorite food online and get it delivered to your doorstep.</p>
            </div>

            <div class="s-box">
                <img src="./images/delivered-removebg-preview.png" alt="">
                <h3>Delivered</h3>
                <p>Order your favorite food online and get it delivered to your doorstep.</p>
            </div>
        </div>
    </section>

    <section class="cta">
        <h2>We make quality food <br> Everyday</h2>
        <a href="#menu" class="btn">Let's talk</a>
    </section>

    <section id="contact">
        <div class="footer">
            <div class="main">
                <div class="col">
                    <h4>Menu Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div class="col">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="#web-design">Web Design</a></li>
                        <li><a href="#web-development">Web Development</a></li>
                        <li><a href="#marketing">Marketing</a></li>
                        <li><a href="#product-management">Product Management</a></li>
                        <li><a href="#graphic-design">Graphic Design</a></li>
                    </ul>
                </div>

                <div class="col">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#delivery">Delivery Information</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#services">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h4>Contact us</h4>
                    <div class="social">
                        <a href="#facebook"><i class="bx bxl-facebook"></i></a>
                        <a href="#instagram"><i class="bx bxl-instagram"></i></a>
                        <a href="#twitter"><i class="bx bxl-twitter"></i></a>
                        <a href="#youtube"><i class="bx bxl-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script type="text/javascript">
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');

        menuIcon.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    </script>
</body>
</html>