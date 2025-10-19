document.addEventListener('DOMContentLoaded', () => {

        AOS.init({
        duration: 400, 
        easing: 'ease-in-out',
        once: true,
        delay: 50,
    });

        const modalOverlay = document.getElementById('modalOverlay');
        const modalFechar = document.getElementById('modalFechar');
        const membrosEquipa = document.querySelectorAll('.membro-equipa');
        
        const modalImg = document.getElementById('modalImg');
        const modalNome = document.getElementById('modalNome');
        const modalGithub = document.getElementById('modalGithub');

        membrosEquipa.forEach(membro => {
            membro.addEventListener('click', () => {
                const nome = membro.dataset.name;
                const githubUrl = membro.dataset.github;
                const imgUrl = membro.dataset.img;
                
                modalNome.textContent = nome;
                modalGithub.href = githubUrl;
                modalImg.src = imgUrl;
                
                modalOverlay.style.display = 'flex';
            });
        });

        function fecharModal() {
            modalOverlay.style.display = 'none';
        }

        modalFechar.addEventListener('click', fecharModal);
        
        modalOverlay.addEventListener('click', (evento) => {
            if (evento.target === modalOverlay) {
                fecharModal();
            }
        });

    });