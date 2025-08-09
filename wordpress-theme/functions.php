<?php
// Theme setup
function bitcoin_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'main_menu' => 'Menu Principal',
        'footer_menu' => 'Menu do Footer',
    ));
}
add_action('after_setup_theme', 'bitcoin_theme_setup');

// Enqueue styles and scripts
function bitcoin_theme_scripts() {
    // Main stylesheet
    wp_enqueue_style('bitcoin-theme-style', get_stylesheet_uri());
    
    // Add custom CSS for better mobile responsive
    wp_add_inline_style('bitcoin-theme-style', '
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.95);
                flex-direction: column;
                padding: 1rem;
                border-radius: 0 0 8px 8px;
            }
            
            .nav-menu.active {
                display: flex;
            }
            
            .mobile-menu-toggle {
                display: block !important;
            }
            
            .header-cta {
                display: none !important;
            }
            
            .grid.lg\\:grid-cols-2 {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .hero-section .animate-fade-in-up {
                order: 2;
            }
            
            .hero-section .glass-card {
                order: 1;
                margin-bottom: 2rem;
            }
        }
        
        @media (min-width: 769px) {
            .header-cta {
                display: block !important;
            }
        }
    ');
}
add_action('wp_enqueue_scripts', 'bitcoin_theme_scripts');

// Custom excerpt length
function bitcoin_custom_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'bitcoin_custom_excerpt_length');

// Custom excerpt more
function bitcoin_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'bitcoin_excerpt_more');

// Add custom post types for testimonials, courses, etc.
function bitcoin_custom_post_types() {
    
    // Testimonials
    register_post_type('testimonials', array(
        'labels' => array(
            'name' => 'Depoimentos',
            'singular_name' => 'Depoimento',
            'add_new' => 'Adicionar Novo',
            'add_new_item' => 'Adicionar Novo Depoimento',
            'edit_item' => 'Editar Depoimento',
            'new_item' => 'Novo Depoimento',
            'view_item' => 'Ver Depoimento',
            'search_items' => 'Buscar Depoimentos',
            'not_found' => 'Nenhum depoimento encontrado',
            'not_found_in_trash' => 'Nenhum depoimento encontrado na lixeira'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-format-quote',
    ));
    
    // Courses
    register_post_type('courses', array(
        'labels' => array(
            'name' => 'Cursos',
            'singular_name' => 'Curso',
            'add_new' => 'Adicionar Novo',
            'add_new_item' => 'Adicionar Novo Curso',
            'edit_item' => 'Editar Curso',
            'new_item' => 'Novo Curso',
            'view_item' => 'Ver Curso',
            'search_items' => 'Buscar Cursos',
            'not_found' => 'Nenhum curso encontrado',
            'not_found_in_trash' => 'Nenhum curso encontrado na lixeira'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'menu_icon' => 'dashicons-welcome-learn-more',
    ));
}
add_action('init', 'bitcoin_custom_post_types');

// Add custom fields support
function bitcoin_add_custom_fields() {
    // Add meta boxes for testimonials
    add_meta_box(
        'testimonial_details',
        'Detalhes do Depoimento',
        'bitcoin_testimonial_meta_box',
        'testimonials',
        'normal',
        'high'
    );
    
    // Add meta boxes for courses
    add_meta_box(
        'course_details',
        'Detalhes do Curso',
        'bitcoin_course_meta_box',
        'courses',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'bitcoin_add_custom_fields');

// Testimonial meta box
function bitcoin_testimonial_meta_box($post) {
    wp_nonce_field(basename(__FILE__), 'testimonial_nonce');
    $author_name = get_post_meta($post->ID, '_author_name', true);
    $author_title = get_post_meta($post->ID, '_author_title', true);
    $rating = get_post_meta($post->ID, '_rating', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="author_name">Nome do Autor:</label></th>';
    echo '<td><input type="text" id="author_name" name="author_name" value="' . esc_attr($author_name) . '" size="30" /></td></tr>';
    echo '<tr><th><label for="author_title">Cargo/Título:</label></th>';
    echo '<td><input type="text" id="author_title" name="author_title" value="' . esc_attr($author_title) . '" size="30" /></td></tr>';
    echo '<tr><th><label for="rating">Avaliação (1-5):</label></th>';
    echo '<td><select id="rating" name="rating">';
    for ($i = 1; $i <= 5; $i++) {
        echo '<option value="' . $i . '"' . selected($rating, $i, false) . '>' . $i . ' estrela' . ($i > 1 ? 's' : '') . '</option>';
    }
    echo '</select></td></tr>';
    echo '</table>';
}

// Course meta box
function bitcoin_course_meta_box($post) {
    wp_nonce_field(basename(__FILE__), 'course_nonce');
    $price = get_post_meta($post->ID, '_price', true);
    $duration = get_post_meta($post->ID, '_duration', true);
    $level = get_post_meta($post->ID, '_level', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="price">Preço:</label></th>';
    echo '<td><input type="text" id="price" name="price" value="' . esc_attr($price) . '" size="30" placeholder="R$ 997" /></td></tr>';
    echo '<tr><th><label for="duration">Duração:</label></th>';
    echo '<td><input type="text" id="duration" name="duration" value="' . esc_attr($duration) . '" size="30" placeholder="8 semanas" /></td></tr>';
    echo '<tr><th><label for="level">Nível:</label></th>';
    echo '<td><select id="level" name="level">';
    echo '<option value="iniciante"' . selected($level, 'iniciante', false) . '>Iniciante</option>';
    echo '<option value="intermediario"' . selected($level, 'intermediario', false) . '>Intermediário</option>';
    echo '<option value="avancado"' . selected($level, 'avancado', false) . '>Avançado</option>';
    echo '</select></td></tr>';
    echo '</table>';
}

// Save custom fields
function bitcoin_save_custom_fields($post_id) {
    // Testimonials
    if (isset($_POST['testimonial_nonce']) && wp_verify_nonce($_POST['testimonial_nonce'], basename(__FILE__))) {
        if (isset($_POST['author_name'])) {
            update_post_meta($post_id, '_author_name', sanitize_text_field($_POST['author_name']));
        }
        if (isset($_POST['author_title'])) {
            update_post_meta($post_id, '_author_title', sanitize_text_field($_POST['author_title']));
        }
        if (isset($_POST['rating'])) {
            update_post_meta($post_id, '_rating', intval($_POST['rating']));
        }
    }
    
    // Courses
    if (isset($_POST['course_nonce']) && wp_verify_nonce($_POST['course_nonce'], basename(__FILE__))) {
        if (isset($_POST['price'])) {
            update_post_meta($post_id, '_price', sanitize_text_field($_POST['price']));
        }
        if (isset($_POST['duration'])) {
            update_post_meta($post_id, '_duration', sanitize_text_field($_POST['duration']));
        }
        if (isset($_POST['level'])) {
            update_post_meta($post_id, '_level', sanitize_text_field($_POST['level']));
        }
    }
}
add_action('save_post', 'bitcoin_save_custom_fields');

// Shortcode for testimonials
function bitcoin_testimonials_shortcode($atts) {
    $atts = shortcode_atts(array(
        'limit' => 3,
    ), $atts);
    
    $testimonials = get_posts(array(
        'post_type' => 'testimonials',
        'posts_per_page' => $atts['limit'],
        'post_status' => 'publish',
    ));
    
    if (empty($testimonials)) {
        return '<p>Nenhum depoimento encontrado.</p>';
    }
    
    $output = '<div class="testimonials-grid grid md:grid-cols-2 lg:grid-cols-3">';
    
    foreach ($testimonials as $testimonial) {
        $author_name = get_post_meta($testimonial->ID, '_author_name', true);
        $author_title = get_post_meta($testimonial->ID, '_author_title', true);
        $rating = get_post_meta($testimonial->ID, '_rating', true);
        
        $output .= '<div class="testimonial glass-card">';
        
        if ($rating) {
            $output .= '<div class="rating" style="margin-bottom: 1rem;">';
            for ($i = 1; $i <= 5; $i++) {
                $output .= $i <= $rating ? '⭐' : '☆';
            }
            $output .= '</div>';
        }
        
        $output .= '<div class="testimonial-content" style="margin-bottom: 1rem;">';
        $output .= '"' . get_the_content(null, false, $testimonial) . '"';
        $output .= '</div>';
        
        if ($author_name) {
            $output .= '<div class="testimonial-author">';
            $output .= '<strong>' . esc_html($author_name) . '</strong>';
            if ($author_title) {
                $output .= '<br><span style="opacity: 0.7;">' . esc_html($author_title) . '</span>';
            }
            $output .= '</div>';
        }
        
        $output .= '</div>';
    }
    
    $output .= '</div>';
    
    return $output;
}
add_shortcode('testimonials', 'bitcoin_testimonials_shortcode');

// Admin customizations
function bitcoin_admin_styles() {
    echo '<style>
        .post-type-testimonials .dashicons-format-quote:before,
        .post-type-courses .dashicons-welcome-learn-more:before {
            color: #ffb703;
        }
    </style>';
}
add_action('admin_head', 'bitcoin_admin_styles');

// Add Bitcoin price widget (optional)
function bitcoin_price_widget() {
    echo '<div id="bitcoin-price" style="background: var(--gradient-card); padding: 1rem; border-radius: var(--radius); margin: 1rem 0; text-align: center;">';
    echo '<h4 style="margin-bottom: 0.5rem;">💰 Preço do Bitcoin</h4>';
    echo '<div id="btc-price-display">Carregando...</div>';
    echo '</div>';
    
    echo '<script>
        fetch("https://api.coindesk.com/v1/bpi/currentprice/BRL.json")
        .then(response => response.json())
        .then(data => {
            const price = data.bpi.BRL.rate;
            document.getElementById("btc-price-display").innerHTML = "1 BTC = " + price;
        })
        .catch(error => {
            document.getElementById("btc-price-display").innerHTML = "Erro ao carregar preço";
        });
    </script>';
}

// Shortcode for Bitcoin price
function bitcoin_price_shortcode() {
    ob_start();
    bitcoin_price_widget();
    return ob_get_clean();
}
add_shortcode('bitcoin_price', 'bitcoin_price_shortcode');
?>