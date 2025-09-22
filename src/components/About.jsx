import styles from "./About.module.css";
import { useScrollAnimationGroup } from "./useScrollAnimationGroup";
import carloAcutis from '../assets/Carlo_Acutis.jpg';
import carloAcutis2 from '../assets/Carlo_Acutis2.jpg';
import carloAcutis3 from '../assets/Carlo_Acutis3.jpeg';

export function About() {
    // 2 containers + 7 itens principais + 2 imagens + texto final = 12
    const [refs, visible] = useScrollAnimationGroup(12);
    return (
        <div className={styles.aboutContainer}>
            <div
                ref={refs[0]}
                className={styles.div1 + (visible[0] ? ' ' + styles.animatedItem : '')}
            >
                <h2 ref={refs[1]} className={visible[1] ? styles.animatedItem : ''}>1. Sobre nós</h2>
                <p ref={refs[2]} className={visible[2] ? styles.animatedItem : ''}>
                    Em um mundo digital e acelerado, sentimos o chamado para criar um refúgio de paz, fé e conhecimento. Assim nasceu a Luz de Cristo, um blog de evangelização que busca ser um farol de esperança e clareza para todos que desejam se aproximar de Deus.
                </p>

                <br />

                <p ref={refs[3]} className={visible[3] ? styles.animatedItem : ''}>
                    Inspirados pelo testemunho de São Carlos Acutis, acreditamos que a tecnologia pode ser uma ponte para o encontro com o sagrado. Nosso objetivo é tornar os ensinamentos do Evangelho acessíveis a todos, promovendo conteúdos que iluminem o coração e fortaleçam a caminhada espiritual.
                </p>

                <br />

                <p ref={refs[4]} className={visible[4] ? styles.animatedItem : ''}>
                    Aqui, você encontrará reflexões sobre a fé católica, histórias de santos, explicações sobre os sacramentos, dicas para viver a espiritualidade no cotidiano e mensagens de esperança para enfrentar os desafios da vida moderna. Queremos ser companhia para quem busca respostas, conforto para quem enfrenta dificuldades e inspiração para quem deseja crescer na fé.
                </p>

                <br />

                <p ref={refs[5]} className={visible[5] ? styles.animatedItem : ''}>
                    A Luz de Cristo é feita para você, que deseja aprofundar seu relacionamento com Deus e descobrir a beleza da Igreja. Sinta-se acolhido, participe, compartilhe e permita que essa luz também brilhe em sua vida e em sua família.
                </p>

                <br />

                <p ref={refs[6]} className={visible[6] ? styles.animatedItem : ''}>
                    <em>"Evangelizar é a graça e a vocação própria da Igreja, a sua identidade mais profunda. Ela existe para evangelizar."</em>
                    <br />
                    — Papa Paulo VI, <span style={{ fontStyle: 'italic' }}>Evangelii Nuntiandi</span>
                </p>
            </div>
            <div
                ref={refs[7]}
                className={styles.div2 + (visible[7] ? ' ' + styles.animatedItem : '')}
            >
                <div ref={refs[8]} className={visible[8] ? styles.animatedItem : ''}>
                    <h2>2. Inspiração</h2>
                    <p>
                        Nossa inspiração vem do luminoso exemplo de São Carlos Acutis, o "Apóstolo da Internet", que nos mostrou que a tecnologia pode ser uma poderosa ferramenta para o bem. Seguindo seus passos, temos a missão de usar este espaço para partilhar a beleza e a profundidade da fé católica de uma maneira acessível, moderna e respeitosa.
                    </p>
                </div>
                <div>
                    <img ref={refs[9]} src={carloAcutis} alt="Foto do Carlo Acutis" className={styles.carloPhoto}/>
                    <img ref={refs[10]} src={carloAcutis3} alt="Foto do Carlo Acutis" className={styles.carloPhoto}/>
                </div>
                <div ref={refs[11]} className={visible[11] ? styles.animatedItem + ' ' + styles.secondTxt : styles.secondTxt}>
                    <p>Decidimos, então, seguir seu exemplo e criar um blog onde a população terá um portal acessível de curiosidades, histórias, exemplos e milagres, para que possam aprender e seguir o exemplo de fé de cada pessoa cuidadosamente selecionada para estar aqui.</p>
                </div>
            </div>
        </div>
    )
}