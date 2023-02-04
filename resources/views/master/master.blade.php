<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description"
          content="É um emissor online gratuito, baseado em empresas do regime simples nacional para emissão e transmissão de notas fiscais eletrônicas de produto.">
    <meta name="author" content="Wallace Tiede">
    <meta name="keywords"
          content="Nota Fiscal Eletrônica, NFe, Nota Fiscal, como emitir nota fiscal eletronica, carta correção, carta correção nfe, cancelar nfe, baixar emissor de nota fiscal eletronica, carta de correção eletronica, cancelar nfe eletronica, nota fiscal eletronica, nota fiscal online, nfe simples nacional, nota fiscal simples nacional, emitir nfe online, emissor nfe, emissor nfe  A1, emissor nfe  A3, emissor de nota fiscal eletronica, xml nfe, como emitir nota fiscal eletronica, sistema nota fiscal eletronica,  notas fiscais eletronicas, xml nota fiscal, emissao de nfe"/>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
          rel="stylesheet">

    <title>NotaME - Seu Emissor de Nf-e</title>

    <!-- CSS Files -->
    <link rel="stylesheet" href="{{url(mix('assets/css/libs.css'))}}"/>
    <link rel="icon" type="image/x-icon" href="">

    @hasSection('css')
        @yield('css')
    @endif

</head>

<body>


<!-- ***** Preloader Start ***** -->
<div id="js-preloader" class="js-preloader">
    <div class="preloader-inner">
        <span class="dot"></span>
        <div class="dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</div>
<!-- ***** Preloader End ***** -->

<!-- ***** Header Area Start ***** -->
<header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <!-- ***** Logo Start ***** -->
                    <a href="{{route('web.index')}}" class="logo">
                        <h4><img src="{{url(mix('assets/images/logoNotaMELogin.png'))}}" alt="Logo NotaMe"></h4>
                    </a>
                    <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** -->
                    <ul class="nav">
                        <li class="scroll-to-section"><a href="#top" class="active">NotaME</a></li>
                        <li class="scroll-to-section"><a href="#about">Quem somos</a></li>
                        <li class="scroll-to-section"><a href="#services">Nossos Serviços</a></li>
                        <li class="scroll-to-section"><a href="#portfolio">Preços</a></li>
                        <li class="scroll-to-section"><a href="#contact">Contato</a></li>
                        <li class="scroll-to-section">
                            <div class="main-blue-button"><a href="https://www.nfeme.com.br/" target="_blank"
                                                             style="color:#fff!important;">Acessar plataforma</a></div>
                        </li>
                    </ul>
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    <!-- ***** Menu End ***** -->
                </nav>
            </div>
        </div>
    </div>
</header>
<!-- ***** Header Area End ***** -->

@yield('content')

<footer>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <p>Copyright © 2023 Mercosistem, Todos os direitos reservados.

                    <br>Desenvolvido por <a rel="nofollow" href="https://www.linkedin.com/in/wallacetiede/"
                                            title="Wallace Tiede" target="_blank">Wallace Tiede</a></p>
            </div>
        </div>
    </div>
</footer>

<!-- Scripts -->
<script src="{{url(mix('assets/js/jquery.min.js'))}}"></script>
<script src="{{url(mix('assets/js/libs.js'))}}"></script>

@hasSection('js')
    @yield('js')
@endif

</body>
</html>
