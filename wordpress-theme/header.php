<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    
    <header class="site-header">
        <nav class="main-nav">
            <div class="container">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    
                    <!-- Logo -->
                    <div class="site-logo">
                        <a href="<?php echo home_url(); ?>" style="color: hsl(var(--primary)); font-weight: 700; font-size: 1.5rem; text-decoration: none; font-family: 'Space Grotesk', sans-serif;">
                            <?php bloginfo('name'); ?>
                        </a>
                    </div>
                    
                    <!-- Navigation Menu -->
                    <?php if (has_nav_menu('main_menu')): ?>
                        <?php wp_nav_menu(array(
                            'theme_location' => 'main_menu',
                            'menu_class' => 'nav-menu',
                            'container' => false,
                        )); ?>
                    <?php else: ?>
                        <ul class="nav-menu">
                            <li><a href="<?php echo home_url(); ?>">Início</a></li>
                            <li><a href="<?php echo home_url('/sobre'); ?>">Sobre</a></li>
                            <li><a href="<?php echo home_url('/blog'); ?>">Blog</a></li>
                            <li><a href="<?php echo home_url('/contato'); ?>">Contato</a></li>
                        </ul>
                    <?php endif; ?>
                    
                    <!-- CTA Button -->
                    <div class="header-cta" style="display: none;">
                        <a href="#contato" class="btn-bitcoin" style="font-size: 0.9rem; padding: 0.5rem 1rem;">
                            Começar Agora
                        </a>
                    </div>
                    
                    <!-- Mobile Menu Toggle -->
                    <div class="mobile-menu-toggle" style="display: none; cursor: pointer; color: hsl(var(--foreground));">
                        ☰
                    </div>
                    
                </div>
            </div>
        </nav>
    </header>

    <div class="site-content" style="margin-top: 80px;">