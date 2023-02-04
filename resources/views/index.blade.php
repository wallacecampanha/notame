@extends('master.master')
@section('content')
    <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-6 align-self-center">
                            <div class="left-content header-text wow fadeInLeft" data-wow-duration="1s"
                                 data-wow-delay="1s">
                                <div class="row">


                                    <div class="col-lg-8">
                                        <img class="logocontent" src="{{url(mix('assets/images/logoNotaMELogin.png'))}}"
                                             alt="Logo NotaMe">
                                    </div>
                                    <div class="col-lg-12">
                                        <h2>Seu emissor de Notas Fiscais de Entrada e Saída</h2>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="main-blue-button scroll-to-section">
                                            <a href="#contact">Criar conta Grátis</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img src="{{url(mix('assets/images/banner-right-image.png'))}}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="features" class="features section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="features-content">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="features-item first-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="0s">
                                    <div class="first-number number">
                                        <h6>01</h6>
                                    </div>
                                    <div class="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                        <div class="progress" data-percentage="100">
                                                <span class="progress-left">
                                                    <span class="progress-bar"></span>
                                                </span>
                                            <span class="progress-right">
                                                    <span class="progress-bar"></span>
                                                </span>
                                            <div class="progress-value">
                                                <div>
                                                    100%<br>
                                                    <span>PRATICIDADE</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Fácil e Prático</h4>
                                    <div class="line-dec"></div>
                                    <p>Projetado para empresas ME, temos somente as ferramentas que precisa!</p>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="features-item second-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <div class="second-number number">
                                        <h6>02</h6>
                                    </div>
                                    <div class="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                        <div class="progress" data-percentage="100">
                                                <span class="progress-left">
                                                    <span class="progress-bar"></span>
                                                </span>
                                            <span class="progress-right">
                                                    <span class="progress-bar"></span>
                                                </span>
                                            <div class="progress-value">
                                                <div>
                                                    100%<br>
                                                    <span>INTUITIVO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Tudo em um clique</h4>
                                    <div class="line-dec"></div>
                                    <p>Transmite a Nota Fiscal e envia no e-mail para seu cliente.</p>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="features-item first-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                                    <div class="third-number number">
                                        <h6>03</h6>
                                    </div>
                                    <div class="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                        <div class="progress" data-percentage="100">
                                                <span class="progress-left">
                                                    <span class="progress-bar"></span>
                                                </span>
                                            <span class="progress-right">
                                                    <span class="progress-bar"></span>
                                                </span>
                                            <div class="progress-value">
                                                <div>
                                                    100%<br>
                                                    <span>CONTROLE</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Controle tudo aqui</h4>
                                    <div class="line-dec"></div>
                                    <p>Cadastre seus clientes, fornecedores, transportadoras e faça sua nota em alguns minutos! </p>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="features-item second-feature last-features-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                                    <div class="fourth-number number">
                                        <h6>04</h6>
                                    </div>
                                    <div class="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                        <div class="progress" data-percentage="100">
                                                <span class="progress-left">
                                                    <span class="progress-bar"></span>
                                                </span>
                                            <span class="progress-right">
                                                    <span class="progress-bar"></span>
                                                </span>
                                            <div class="progress-value">
                                                <div>
                                                    100%<br>
                                                    <span>SOLUÇÃO</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Suporte Ao Vivo</h4>
                                    <div class="line-dec"></div>
                                    <p>Tem dúvidas? Fale com nosso suporte através do chat ao vivo na plataforma!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div id="about" class="about-us section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="left-image wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                        <img src="{{url(mix('assets/images/merco.png'))}}"
                             style="border-radius:9px;box-shadow:9px 9px 20px #ccc;"
                             alt="">
                    </div>
                </div>
                <div class="col-lg-6 align-self-center wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                    <div class="section-heading">
                        <h6>Uma História de Sucesso em 21 anos!</h6>
                        <h2>A NotaME é uma solução da <em>Mercosistem</em> Sistemas e Consultoria para Gestão de
                            Negócios</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-sm-4">
                            <div class="about-item">
                                <h4>750+</h4>
                                <h6>Projetos finalizados</h6>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-4">
                            <div class="about-item">
                                <h4>1000+</h4>
                                <h6>Clientes satisfeitos</h6>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-4">
                            <div class="about-item">
                                <h4>10.000+</h4>
                                <h6>Usuários Ativos</h6>
                            </div>
                        </div>
                    </div>
                    <p>
                        A Mercosistem foi fundada em 2001, na cidade de
                        Marília – SP, e fornece soluções de gerenciamento
                        para empresas. A companhia se desenvolveu baseada
                        na experiência e conhecimento de seus fundadores,
                        que no início dos anos 2000 perceberam a dificuldade
                        de alguns empresários em controlarem suas empresas.
                    </p>


                    <div class="main-green-button"><a href="https://www.mercosistem.com.br/quem-somos" target="_blank">Conheça
                            mais</a></div>
                </div>
            </div>
        </div>
    </div>

    <div id="services" class="our-services section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                        <h6>Nossos serviços</h6>
                        <h2>Descubra o que <em>oferecemos</em> para o seu <em>negócio</em></h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4">
                    <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="icon">
                                    <img src="{{url(mix('assets/images/service-icon-01.png'))}}" alt="">
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="right-content">
                                    <h4>Emissão</h4>
                                    <p>Temos todas as informações necessárias para vocÊ emitir suas notas com
                                        tranquilidade.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="icon">
                                    <img src="{{url(mix('assets/images/service-icon-02.png'))}}" alt="">
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="right-content">
                                    <h4>Entradas</h4>
                                    <p>Receba suas mercadorias, importe suas notas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="icon">
                                    <img src="{{url(mix('assets/images/service-icon-03.png'))}}" alt="">
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="right-content">
                                    <h4>Notificações</h4>
                                    <p>Envie a nota fiscal para o e-mail do seu cliente com um clique</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="icon">
                                    <img src="{{url(mix('assets/images/service-icon-03.png'))}}" alt="">
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="right-content">
                                    <h4>Correções e ajustes</h4>
                                    <p>Foi algo errado? Envie uma carta de correção ou cancele a tempo a nota
                                        fiscal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.7s">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="icon">
                                    <img src="{{url(mix('assets/images/service-icon-01.png'))}}" alt="">
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="right-content">
                                    <h4>Controle total</h4>
                                    <p>
                                        Cadastre seus clientes, fornececdores e transportadoras, tenha o controle total
                                        da
                                        sua empresa
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="icon">
                                    <img src="{{url(mix('assets/images/service-icon-02.png'))}}" alt="">
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="right-content">
                                    <h4>Uma plataforma 24h</h4>
                                    <p>Mantemos uma plataforma segura, funcionando 24h para atender suas prioridades</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="portfolio" class="our-portfolio section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                        <h6>Contrate agora</h6>
                        <h2>Por um preço que cabe no seu <em>bolso!</em></h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
            <div class="row">
                <div class="col-lg-12">

                    <div class="prices">
                        <div class='package'>
                            <div class='name'>Anual</div>
                            <div class='price'>R$189,90</div>
                            <div class='trial'>20% de desconto</div>
                            <hr class="hr">
                            <ul class="ul">
                                <li class="li">
                                    Notas ilimitadas
                                </li>
                                <li class="li">
                                    Suporte por e-mail, chat e telefone
                                </li>
                                <li class="li">
                                    Certificado A1 e A3
                                </li>
                                <li class="li">
                                    Cadastros ilimitados
                                </li>
                                <li class="li">
                                    Sem publicidade
                                </li>
                            </ul>
                            <div class="main-price-button scroll-to-section">
                                <a href="https://www.nfeme.com.br/Login">Começar agora</a>
                            </div>
                        </div>
                        <div class='package brilliant'>
                            <div class='name'>Trimestral</div>
                            <div class='price'>R$49,90</div>
                            <div class='trial'>12% de desconto</div>
                            <hr class="hr">
                            <ul class="ul">
                                <li class="li">
                                    Notas ilimitadas
                                </li>
                                <li class="li">
                                    Suporte por e-mail e chat
                                </li>
                                <li class="li">
                                    Certificado A1 e A3
                                </li>
                                <li class="li">
                                    Cadastros ilimitados
                                </li>
                                <li class="li">
                                    Sem publicidade<br>
                                </li>
                            </ul>
                            <div class="main-price-button scroll-to-section" style="margin-top:35px;">
                                <a href="https://www.nfeme.com.br/Login">Começar agora</a>
                            </div>
                        </div>
                        <div class='package'>
                            <div class='name'>Mensal</div>
                            <div class='price'>R$19,90</div>
                            <div class='trial'>Assinatura no cartão</div>
                            <hr class="hr">
                            <ul class="ul">
                                <li class="li">
                                    Notas ilimitadas
                                </li>
                                <li class="li">
                                    Suporte por e-mail e chat
                                </li>
                                <li class="li">
                                    Certificado A1 e A3
                                </li>
                                <li class="li">
                                    Cadastros ilimitados
                                </li>
                                <li class="li">
                                    Sem publicidade<br>
                                </li>
                            </ul>
                            <div class="main-price-button scroll-to-section" style="margin-top:35px;">
                                <a href="https://www.nfeme.com.br/Login">Começar agora</a>
                            </div>
                        </div>
                        <div class='package'>
                            <div class='name'>Grátis</div>
                            <div class='price'>R$00,00</div>
                            <div class='trial'>Utilize sem custos</div>
                            <hr class="hr">
                            <ul class="ul">
                                <li class="li">
                                    10 Notas/mês
                                </li>
                                <li class="li">
                                    Suporte por e-mail
                                </li>
                                <li class="li">
                                    Certificado A1
                                </li>
                                <li class="li">
                                    10 Cadastros ativos
                                </li>
                                <li class="li">
                                    Com publicidade<br>
                                </li>
                            </ul>
                            <div class="main-price-button scroll-to-section" style="margin-top:35px;">
                                <a href="https://www.nfeme.com.br/Login">Começar agora</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


    <div id="portfolio" class="our-portfolio section">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                        <h6>Nossa plataforma</h6>
                        <h2>Usar o NotaME <em>é facil assim!</em></h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
            <div class="row">

                <div id="video" class="our-videos section" style="margin-top: -100px;">
                    <div class="videos-left-dec">
                        <img src="{{url(mix('assets/images/videos-left-dec.png'))}}" alt="">
                    </div>
                    <div class="videos-right-dec">
                        <img src="{{url(mix('assets/images/videos-right-dec.png'))}}" alt="">
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="naccs">
                                    <div class="grid">
                                        <div class="row">
                                            <div class="col-lg-8">
                                                <ul class="nacc">
                                                    <li class="active">
                                                        <div>
                                                            <div class="thumb">
                                                                <iframe width="100%" height="auto"
                                                                        src="https://www.youtube.com/embed/VIhKUntQhs0"
                                                                        title="YouTube video player" frameborder="0"
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                        allowfullscreen></iframe>
                                                                <div class="overlay-effect">
                                                                    <a href=""><h4>Emissão</h4></a>
                                                                    <span>Notas Fiscais</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <div class="thumb">
                                                                <iframe width="100%" height="auto"
                                                                        src="https://www.youtube.com/embed/91QZPyL8zSA"
                                                                        title="YouTube video player" frameborder="0"
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                        allowfullscreen></iframe>
                                                                <div class="overlay-effect">
                                                                    <a href="#"><h4>Cancelamento</h4></a>
                                                                    <span>Notas Fiscais</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <div class="thumb">
                                                                <iframe width="100%" height="auto"
                                                                        src="https://www.youtube.com/embed/r8iyRM6vUVk"
                                                                        title="YouTube video player" frameborder="0"
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                        allowfullscreen></iframe>
                                                                <div class="overlay-effect">
                                                                    <a href="#"><h4>Faturamento</h4></a>
                                                                    <span>Notas Fiscais</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            <div class="thumb">
                                                                <iframe width="100%" height="auto"
                                                                        src="https://www.youtube.com/embed/T0mVPhuh-MM"
                                                                        title="YouTube video player" frameborder="0"
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                        allowfullscreen></iframe>
                                                                <div class="overlay-effect">
                                                                    <a href="#"><h4>Pedidos</h4></a>
                                                                    <span>Vendas</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="menu">
                                                    <div class="active">
                                                        <div class="thumb">
                                                            <img src="{{url(mix('assets/images/video-thumb-01.png'))}}" alt="">
                                                            <div class="inner-content">
                                                                <h4>Emissão</h4>
                                                                <span>Notas Fiscais</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="thumb">
                                                            <img src="{{url(mix('assets/images/video-thumb-02.png'))}}" alt="">
                                                            <div class="inner-content">
                                                                <h4>Cancelamento</h4>
                                                                <span>Notas Fiscais</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="thumb">
                                                            <img src="{{url(mix('assets/images/video-thumb-03.png'))}}"
                                                                 alt="Marketing">
                                                            <div class="inner-content">
                                                                <h4>Faturamento</h4>
                                                                <span>Notas Fiscais</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="thumb">
                                                            <img src="{{url(mix('assets/images/video-thumb-04.png'))}}"
                                                                 alt="SEO Work">
                                                            <div class="inner-content">
                                                                <h4>Pedidos</h4>
                                                                <span>Vendas</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>

    <div id="contact" class="contact-us section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
                    <form id="contact" action="" method="post">
                        <div class="row">
                            <div class="col-lg-6 offset-lg-3">
                                <div class="section-heading">
                                    <h6>Estamos a disposição</h6>
                                    <h2>Ficou com alguma dúvida? <br><em>A gente responde :)</em></h2>
                                </div>
                            </div>
                            <div class="col-lg-9">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <fieldset>
                                            <input type="name" name="name" id="name" placeholder="Seu nome"
                                                   autocomplete="on" required>
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-6">
                                        <fieldset>
                                            <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*"
                                                   placeholder="Seu E-mail" required="">
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-12">
                                        <fieldset>
                                        <textarea name="message" type="text" class="form-control" id="message"
                                                  placeholder="Como podemos ajudar?" required=""></textarea>
                                        </fieldset>
                                    </div>
                                    <div class="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" class="main-button ">Enviar!</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="contact-info">
                                    <ul>
                                        <li>
                                            <div class="icon">
                                                <img src="{{url(mix('assets/images/contact-icon-01.png'))}}" alt="email icon">
                                            </div>
                                            <a target="_blank" href="mailto:atendimento@notame.com.br">atendimento@notame.com.br</a>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <img src="{{url(mix('assets/images/contact-icon-02.png'))}}" alt="phone">
                                            </div>
                                            <a target="_blank" href="te:+551434028484">(14) 3402-8484</a>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <img src="{{url(mix('assets/images/contact-icon-03.png'))}}" alt="location">
                                            </div>
                                            <a target="_blank"
                                               href="https://www.google.com.br/maps/place/Av.+Santo+Ant%C3%B4nio,+483+-+Centro,+Mar%C3%ADlia+-+SP,+17500-070/@-22.2200732,-49.9549202,17z/data=!3m1!4b1!4m5!3m4!1s0x94bfd73ed9db7c6d:0x520a58a879b65740!8m2!3d-22.2200782!4d-49.9527315">Avenida
                                                Santo Antônio, 483 - Centro - Marília/SP</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('js')
    <script>
        // Acc
        $(document).on("click", ".naccs .menu div", function () {
            var numberIndex = $(this).index();

            if (!$(this).is("active")) {
                $(".naccs .menu div").removeClass("active");
                $(".naccs ul li").removeClass("active");

                $(this).addClass("active");
                $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

                var listItemHeight = $(".naccs ul")
                    .find("li:eq(" + numberIndex + ")")
                    .innerHeight();
                $(".naccs ul").height(listItemHeight + "px");
            }
        });
    </script>
@endsection
