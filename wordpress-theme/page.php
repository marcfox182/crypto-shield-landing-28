<?php get_header(); ?>

<main class="main-content">
    <div class="container">
        
        <?php if (have_posts()): ?>
            <?php while (have_posts()): the_post(); ?>
                
                <article class="single-page py-16">
                    
                    <!-- Page Header -->
                    <header class="page-header text-center mb-8">
                        <h1 class="page-title"><?php the_title(); ?></h1>
                        
                        <?php if (has_post_thumbnail()): ?>
                            <div class="page-thumbnail mb-8">
                                <?php the_post_thumbnail('large', array('style' => 'width: 100%; height: auto; border-radius: var(--radius);')); ?>
                            </div>
                        <?php endif; ?>
                    </header>
                    
                    <!-- Page Content -->
                    <div class="page-content glass-card" style="max-width: 1000px; margin: 0 auto;">
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
                    
                </article>
                
                <!-- Comments for pages (if enabled) -->
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