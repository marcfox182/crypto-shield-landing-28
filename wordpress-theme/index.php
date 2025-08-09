<?php get_header(); ?>

<main class="main-content">
    <div class="container">
        
        <?php if (is_home() || is_front_page()): ?>
            
            <!-- Hero Section -->
            <section class="hero-section py-16">
                <div class="grid lg:grid-cols-2 items-center">
                    <div class="animate-fade-in-up">
                        <h1 class="mb-8">
                            Descubra como 
                            <span class="text-gradient-bitcoin">blindar o seu dinheiro</span> 
                            da inflação e criar uma 
                            <span class="text-gradient-bitcoin">reserva sólida</span>, 
                            sem depender de bancos ou governo.
                        </h1>
                        
                        <p class="mb-8" style="font-size: 1.1rem; opacity: 0.8;">
                            A cada ano, o real perde poder de compra e o custo de vida dispara. 
                            O Bitcoin é a forma mais segura e descentralizada de proteger seu 
                            dinheiro e garantir a segurança da sua família.
                        </p>
                        
                        <div class="mb-8">
                            <a href="#contato" class="btn-bitcoin">
                                Quero blindar meu patrimônio agora
                            </a>
                        </div>
                        
                        <div style="display: flex; gap: 2rem; flex-wrap: wrap; color: #10b981;">
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <span>🛡️</span>
                                <span>100% Seguro</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <span>✅</span>
                                <span>Garantia 30 dias</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <span>👥</span>
                                <span>Suporte total</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="glass-card text-center">
                        <div style="aspect-ratio: 16/9; background: var(--gradient-dark); border-radius: var(--radius); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                            <div>
                                <div style="width: 80px; height: 80px; background: rgba(255, 183, 3, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                                    <div style="width: 0; height: 0; border-left: 12px solid #ffb703; border-top: 8px solid transparent; border-bottom: 8px solid transparent; margin-left: 4px;"></div>
                                </div>
                                <p style="opacity: 0.6;">Video Sales Letter</p>
                            </div>
                        </div>
                        <p style="font-size: 0.9rem; opacity: 0.7;">
                            Descubra como proteger seu patrimônio em 15 minutos
                        </p>
                    </div>
                </div>
            </section>
            
        <?php endif; ?>
        
        <!-- Blog Posts -->
        <?php if (have_posts()): ?>
            <section class="posts-section py-8">
                <div class="grid md:grid-cols-2 lg:grid-cols-3">
                    <?php while (have_posts()): the_post(); ?>
                        <article class="post glass-card">
                            <h2 class="post-title">
                                <a href="<?php the_permalink(); ?>" style="color: hsl(var(--foreground)); text-decoration: none;">
                                    <?php the_title(); ?>
                                </a>
                            </h2>
                            
                            <div class="post-meta">
                                Publicado em <?php echo get_the_date(); ?> por <?php the_author(); ?>
                            </div>
                            
                            <div class="post-content">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <a href="<?php the_permalink(); ?>" class="btn-bitcoin" style="font-size: 0.9rem; padding: 0.5rem 1rem;">
                                Leia mais
                            </a>
                        </article>
                    <?php endwhile; ?>
                </div>
                
                <!-- Pagination -->
                <div class="pagination" style="margin-top: 2rem; text-align: center;">
                    <?php
                    echo paginate_links(array(
                        'prev_text' => '← Anterior',
                        'next_text' => 'Próximo →',
                    ));
                    ?>
                </div>
            </section>
        
        <?php else: ?>
            <section class="no-posts py-16 text-center">
                <h2>Nenhum post encontrado</h2>
                <p>Não há conteúdo disponível no momento.</p>
            </section>
        <?php endif; ?>
        
    </div>
</main>

<?php get_footer(); ?>