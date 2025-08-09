    </div> <!-- .site-content -->

    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                
                <!-- Company Info -->
                <div class="footer-section">
                    <h3><?php bloginfo('name'); ?></h3>
                    <p style="margin-bottom: 1rem;">
                        Proteja seu patrimônio com Bitcoin. Educação financeira e mentoria especializada 
                        para você construir uma reserva sólida e independente.
                    </p>
                    
                    <div style="margin-bottom: 1rem;">
                        <strong>Contato:</strong><br>
                        📞 (11) 99999-9999<br>
                        ✉️ contato@<?php echo str_replace('https://', '', home_url()); ?>
                    </div>
                    
                    <div style="display: flex; gap: 1rem;">
                        <span style="background: rgba(16, 185, 129, 0.2); padding: 0.5rem; border-radius: 4px; font-size: 0.8rem;">🔒 SSL</span>
                        <span style="background: rgba(16, 185, 129, 0.2); padding: 0.5rem; border-radius: 4px; font-size: 0.8rem;">💳 PCI</span>
                        <span style="background: rgba(16, 185, 129, 0.2); padding: 0.5rem; border-radius: 4px; font-size: 0.8rem;">🛡️ LGPD</span>
                    </div>
                </div>
                
                <!-- Services -->
                <div class="footer-section">
                    <h3>Serviços</h3>
                    <ul>
                        <li><a href="#">Mentoria Bitcoin</a></li>
                        <li><a href="#">Curso Completo</a></li>
                        <li><a href="#">Consultoria Individual</a></li>
                        <li><a href="#">Suporte Técnico</a></li>
                        <li><a href="#">Comunidade VIP</a></li>
                    </ul>
                </div>
                
                <!-- Resources -->
                <div class="footer-section">
                    <h3>Recursos</h3>
                    <ul>
                        <li><a href="#">E-book Gratuito</a></li>
                        <li><a href="#">Calculadora Bitcoin</a></li>
                        <li><a href="#">Webinars</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                
            </div>
            
            <!-- Legal Links -->
            <div style="margin: 2rem 0; padding: 1rem 0; border-top: 1px solid hsl(var(--border)); border-bottom: 1px solid hsl(var(--border));">
                <div style="display: flex; gap: 2rem; flex-wrap: wrap; justify-content: center; margin-bottom: 1rem;">
                    <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
                        📋 Termos de Uso
                    </a>
                    <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
                        🔒 Política de Privacidade
                    </a>
                    <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
                        📞 Contato
                    </a>
                    <a href="#" style="color: hsl(var(--muted-foreground)); text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">
                        ❓ Suporte
                    </a>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Todos os direitos reservados.</p>
                
                <div class="glass-card" style="margin-top: 2rem; padding: 1.5rem;">
                    <h4 style="color: #ef4444; margin-bottom: 1rem;">⚠️ Aviso Importante sobre Investimentos</h4>
                    <p style="font-size: 0.9rem; line-height: 1.6;">
                        <strong>Este conteúdo é apenas educacional.</strong> Bitcoin e outros ativos digitais são investimentos 
                        de alto risco. Nunca invista mais do que pode perder. Consulte sempre um consultor financeiro 
                        qualificado antes de tomar decisões de investimento. Rentabilidade passada não garante resultados futuros.
                    </p>
                </div>
            </div>
        </div>
    </footer>

    <?php wp_footer(); ?>
    
    <!-- Mobile Menu Script -->
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        // Simple mobile menu toggle
        const toggle = document.querySelector('.mobile-menu-toggle');
        const menu = document.querySelector('.nav-menu');
        
        if (toggle && menu) {
            toggle.addEventListener('click', function() {
                menu.classList.toggle('active');
            });
        }
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
    </script>

</body>
</html>