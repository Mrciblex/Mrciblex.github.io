<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/png" href="/Image/sac.jpg">
    <link rel="stylesheet" type="text/css" href="login.css">
    <script src="https://kit.fontawesome.com/1928087944.js" crossorigin="anonymous"></script>
    <title>Market Login</title>
</head>
<body>
    <!-----------------------PAGE NAV BAR CONTENT--------------------------->
    <header class="nav">
        <a href="/homepage/spawn.html" class="nav-icon" aria-label="Visiter la page d'acceuil" aria-current="page">
            <img class="icon1" src="/Image/sac.jpg" alt="Logo Market">
            <span class="icontxt"><strong>MARKET</strong></span>
        </a>
        <div class="nav-main-content">
            <div class="nav-links">
                <a class="links" href="#" aria-label="Visiter la page catégorie Femme">Femme</a>
                <a id="link2" class="links" href="#" aria-label="Visiter la page catégorie Homme">Homme</a>
                <a id="link3" class="links" href="#" aria-label="Visiter la page catégorie Chaussures">Chaussures</a>
                <a id="link4" class="links" href="#" aria-label="Visiter la page des Nouveautés">Nouveautés</a>
            </div>
            <div class="searchbar">
                <input class="search" type="text" placeholder="Rechercher" autocomplete="off" spellcheck="false">
                <button class="searchbtn" aria-label="Boutton rechercher">
                    <i id="searchbtn" class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <div class="nav-fav">
                <a href="#" class="fav" aria-label="Boutton favoris">
                    <i id="favbtn" class="fa-regular fa-heart"></i>
                </a>
            </div>
            <div class="nav-cart">
                <a href="#" class="cart" aria-label="Boutton caddis">
                    <i id="cartbtn" class="fa-solid fa-bag-shopping"></i>
                </a>
            </div>
            <div class="nav-auth">
                <a href="/loginpage/login.php" class="auth" aria-label="Bouton d'authentification">
                    <i id="loginbtn" class="fa-solid fa-user"></i>
                </a>
            </div>
        </div>
        
    </header>
    <!------------------------------------------------------------------------------>
    <!-----------------------HOME PAGE CONTENT-------------------------------------->
    <div class="homelogin">
        <div class="formbox">
            <div class="topicon">
                <img class="icon1 icon2" src="/Image/sac.jpg" alt="Logo Market">
            </div>
            <div class="loginbox">
                <h2 class="logintitle"><em>Login</em></h2>
                <form action="#" method="POST">
                    <input type="text" name="mail">
                    <input type="password" name="pswrd">
                    <input type="submit" value="Log in">
                </form>
            </div>
        </div>
    </div>
    <!------------------------------------------------------------------------------>
    <!-----------------------DOWN PAGE CONTENT-------------------------------------->
    <div class="downpage">  
        <div class="homedownpage">
            <div class="down-txt">
                <a href="#" class="downpagebtn">Refund policy</a>
                <a href="#" class="downpagebtn">Contact us</a>
                <a href="#" class="downpagebtn">Newsletter</a>
            </div>
        </div>
    </div> 
<!------------------------------------------------------------------------------>
</body>
</html>