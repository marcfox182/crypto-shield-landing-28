<?php get_header(); ?>

<main class="main-content">
    <div class="container">
        
        <?php if (have_posts()): ?>
            <?php while (have_posts()): the_post(); ?>
                
                <article class="single-post py-16">
                    
                    <!-- Post Header -->
                    <header class="post-header text-center mb-8">
                        <h1 class="post-title"><?php the_title(); ?></h1>
                        
                        <div class="post-meta" style="margin-bottom: 2rem;">
                            <span>📅 Publicado em <?php echo get_the_date(); ?></span>
                            <span style="margin: 0 1rem;">•</span>
                            <span>👤 Por <?php the_author(); ?></span>
                            
                            <?php if (has_category()): ?>
                                <span style="margin: 0 1rem;">•</span>
                                <span>🏷️ <?php the_category(', '); ?></span>
                            <?php endif; ?>
                        </div>
                        
                        <?php if (has_post_thumbnail()): ?>
                            <div class="post-thumbnail mb-8">
                                <?php the_post_thumbnail('large', array('style' => 'width: 100%; height: auto; border-radius: var(--radius);')); ?>
                            </div>
                        <?php endif; ?>
                    </header>
                    
                    <!-- Post Content -->
                    <div class="post-content glass-card" style="max-width: 800px; margin: 0 auto;">
                        <?php the_content(); ?>
                        
                        <?php
                        wp_link_pages(array(
                            'before' => '<div class="page-links" style="margin-top: 2rem; text-align: center;">',
                            'after'  => '</div>',
                            'link_before' => '<span class="btn-bitcoin" style="margin: 0 0.5rem; font-size: 0.9rem; padding: 0.5rem 1rem;">',
                            'link_after' => '</span>',
                        ));
                        ?>
                    </div>
                    
                    <!-- Post Tags -->
                    <?php if (has_tag()): ?>
                        <div class="post-tags" style="margin: 2rem auto; max-width: 800px; text-align: center;">
                            <strong>Tags:</strong>
                            <?php the_tags('<span style="margin-left: 0.5rem;">', ' ', '</span>'); ?>
                        </div>
                    <?php endif; ?>
                    
                    <!-- Author Bio -->
                    <?php
                    $author_bio = get_the_author_meta('description');
                    if ($author_bio):
                    ?>
                        <div class="author-bio glass-card" style="max-width: 800px; margin: 2rem auto;">
                            <div style="display: flex; gap: 1rem; align-items: center;">
                                <div class="author-avatar">
                                    <?php echo get_avatar(get_the_author_meta('ID'), 80, '', '', array('style' => 'border-radius: 50%;')); ?>
                                </div>
                                <div class="author-info">
                                    <h4>Sobre <?php the_author(); ?></h4>
                                    <p style="margin: 0.5rem 0 0;"><?php echo esc_html($author_bio); ?></p>
                                </div>
                            </div>
                        </div>
                    <?php endif; ?>
                    
                    <!-- Navigation -->
                    <nav class="post-navigation" style="max-width: 800px; margin: 2rem auto;">
                        <div class="grid md:grid-cols-2" style="gap: 1rem;">
                            <?php
                            $prev_post = get_previous_post();
                            $next_post = get_next_post();
                            ?>
                            
                            <?php if ($prev_post): ?>
                                <a href="<?php echo get_permalink($prev_post); ?>" class="glass-card" style="text-decoration: none; color: hsl(var(--foreground)); display: block; padding: 1rem;">
                                    <div style="font-size: 0.9rem; opacity: 0.7; margin-bottom: 0.5rem;">← Post Anterior</div>
                                    <div style="font-weight: 600;"><?php echo get_the_title($prev_post); ?></div>
                                </a>
                            <?php endif; ?>
                            
                            <?php if ($next_post): ?>
                                <a href="<?php echo get_permalink($next_post); ?>" class="glass-card" style="text-decoration: none; color: hsl(var(--foreground)); display: block; padding: 1rem; text-align: right;">
                                    <div style="font-size: 0.9rem; opacity: 0.7; margin-bottom: 0.5rem;">Próximo Post →</div>
                                    <div style="font-weight: 600;"><?php echo get_the_title($next_post); ?></div>
                                </a>
                            <?php endif; ?>
                        </div>
                    </nav>
                    
                </article>
                
                <!-- Related Posts -->
                <?php
                $related_posts = get_posts(array(
                    'category__in' => wp_get_post_categories($post->ID),
                    'numberposts' => 3,
                    'post__not_in' => array($post->ID),
                ));
                
                if ($related_posts):
                ?>
                    <section class="related-posts py-8">
                        <div style="max-width: 800px; margin: 0 auto;">
                            <h3 class="text-center mb-8">Posts Relacionados</h3>
                            
                            <div class="grid md:grid-cols-3" style="gap: 1rem;">
                                <?php foreach ($related_posts as $related): ?>
                                    <a href="<?php echo get_permalink($related); ?>" class="glass-card" style="text-decoration: none; color: hsl(var(--foreground)); display: block;">
                                        <?php if (has_post_thumbnail($related)): ?>
                                            <div style="margin-bottom: 1rem;">
                                                <?php echo get_the_post_thumbnail($related, 'medium', array('style' => 'width: 100%; height: 150px; object-fit: cover; border-radius: var(--radius);')); ?>
                                            </div>
                                        <?php endif; ?>
                                        
                                        <h4 style="margin-bottom: 0.5rem; font-size: 1rem;"><?php echo get_the_title($related); ?></h4>
                                        <p style="font-size: 0.9rem; opacity: 0.7;"><?php echo wp_trim_words(get_the_excerpt($related), 15); ?></p>
                                    </a>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </section>
                <?php endif; ?>
                
                <!-- Comments -->
                <?php if (comments_open() || get_comments_number()): ?>
                    <section class="comments-section py-8">
                        <div style="max-width: 800px; margin: 0 auto;">
                            <?php comments_template(); ?>
                        </div>
                    </section>
                <?php endif; ?>
                
            <?php endwhile; ?>
        <?php endif; ?>
        
    </div>
</main>

<?php get_footer(); ?>