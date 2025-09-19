import styles from "./About.module.css";
import carloAcutis from '../assets/Carlo_Acutis.jpg';
import carloAcutis2 from '../assets/Carlo_Acutis2.jpg';
import carloAcutis3 from '../assets/Carlo_Acutis3.jpeg';

export function About () {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.div1}>
                <h2>Sobre nós</h2>
                <p>
                    Em um mundo digital e acelerado, sentimos o chamado para criar um refúgio de paz, fé e conhecimento. Assim nasceu a Luz de Cristo, um blog de evangelização que busca ser um farol de esperança e clareza para todos que desejam se aproximar de Deus.
                </p>
                <br />
                <p>
                    Inspirados pelo testemunho de São Carlos Acutis, acreditamos que a tecnologia pode ser uma ponte para o encontro com o sagrado. Nosso objetivo é tornar os ensinamentos do Evangelho acessíveis a todos, promovendo conteúdos que iluminem o coração e fortaleçam a caminhada espiritual.
                <br />
                <p>
                    Aqui, você encontrará reflexões sobre a fé católica, histórias de santos, explicações sobre os sacramentos, dicas para viver a espiritualidade no cotidiano e mensagens de esperança para enfrentar os desafios da vida moderna. Queremos ser companhia para quem busca respostas, conforto para quem enfrenta dificuldades e inspiração para quem deseja crescer na fé.
                </p>
                <br />
                <p>
                    A Luz de Cristo é feita para você, que deseja aprofundar seu relacionamento com Deus e descobrir a beleza da Igreja. Sinta-se acolhido, participe, compartilhe e permita que essa luz também brilhe em sua vida e em sua família.
                </p>

                <br />
                
                <p>
                    <em>"Evangelizar é a graça e a vocação própria da Igreja, a sua identidade mais profunda. Ela existe para evangelizar."</em>
                    <br />
                    — Papa Paulo VI, <span style={{ fontStyle: 'italic' }}>Evangelii Nuntiandi</span>
                </p>
                </p>
            </div>

           <div className={styles.div2}>
                <div>
                    <h2>Inspiração</h2>
                    <p>
                        Nossa inspiração vem do luminoso exemplo de São Carlos Acutis, o "Apóstolo da Internet", que nos mostrou que a tecnologia pode ser uma poderosa ferramenta para o bem. Seguindo seus passos, temos a missão de usar este espaço para partilhar a beleza e a profundidade da fé católica de uma maneira acessível, moderna e respeitosa.
                    </p>
                    
                </div>

                <div>
                    <img src={carloAcutis} alt="Foto do Carlo Acutis" className={styles.carloPhoto}/>
                    <img src={carloAcutis3} alt="Foto do Carlo Acutis" className={styles.carloPhoto}/>
                </div>

                <div className={styles.secondTxt}>
                    <p>Decidimos, então, seguir seu exemplo e criar um blog onde a população terá um portal acessível de curiosidades, histórias, exemplos e milagres, para que possam aprender e seguir o exemplo de fé de cada pessoa cuidadosamente selecionada para estar aqui.</p>
                </div>
            </div>
        </div>
    )
}