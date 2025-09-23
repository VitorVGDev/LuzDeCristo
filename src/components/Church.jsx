import styles from './Church.module.css';

export function Church() {
    return (
       
       <div className={styles.containerIgreja}>

           <section className={styles.introIgreja}>
                <div className={styles.comoIniciou}>
                    <h2>3. Origem da Igreja</h2>
                    <p>
                        A história da Igreja Católica Apostólica Romana tem seu início por volta do ano 30 d.C, por ocasião do ministério de Jesus Cristo, que escolheu os 12 Apóstolos, com os quais edificou Sua Igreja (Mateus 16,18); dentre estes, Jesus escolheu um como principal, o "primeiro entre iguais", Simão, a quem Ele chamou Pedro, depois que este o reconheceu como o Cristo, Filho de Deus, que havia de vir para reunir o povo eleito de Deus disperso pelo mundo inteiro. O nome "Pedro" indica que Simão, filho de Jonas, é a pedra sobre a qual Jesus edificou Sua Igreja.
                    
                    </p>
           
                    <br />
                    
                    
                    <p>
                        A Igreja é um só Corpo, que tem Jesus Cristo mesmo como Cabeça, como disse São Paulo Apóstolo. Santo Inácio de Antioquia, um dos primeiros bispos da Igreja Católica, que viveu entre 35 e 107 d.C, ensinou que "a igreja de Cristo é uma só, é Una", devido à unidade dos cristãos em plena comunhão com Cristo e com o seu Magistério Eclesiástico. Este é representado, principalmente, pelo bispo da Diocese de Roma, que é o Papa, sucessor de São Pedro Apóstolo na Sé de Roma. Desde 2025, o Papa Leão XIV ocupa o cargo máximo da Igreja.
                    </p>
                    
                    <br />
                    
                    <h3>Versículo</h3>
                    <p>
                        <em>“E também eu te digo que tu és Pedro, e sobre esta pedra edificarei a minha igreja, e as portas do inferno não prevalecerão contra ela”
                        </em>
                        
                        <br />
                        - Mateus 16:18
                    </p>

                </div>

                <div className={styles.pedroInfo}>
                    <h2>4. São Pedro</h2>
                    <p>
                        Pedro era o amigo mais próximo e discípulo de Jesus e tornou-se apóstolo durante seu ministério. Após a morte de Jesus, Pedro tornou-se o líder dos apóstolos e é frequentemente descrito como seu porta-voz nos evangelhos.
                    </p>
                    
                    <br />
                                        
                    <p>
                        Ele levou suas pregações a lugares distantes e amplos ao se lançar em várias atividades missionárias. Sua dedicação e contribuição para os ensinamentos de Cristo e da Igreja é o motivo pelo qual ele foi considerado o primeiro Papa de Roma. Por isso, é amplamente aceito que São Pedro foi o primeiro Papa de Roma. Acredita-se que ele tenha fundado a primeira igreja em Roma e estabelecido a base para todos os futuros papas. Todos os papas são considerados sucessores do santo.
                    </p>
                    
                    <br />

                    <h3>Morte e Sepultamento</h3>
                    <br />
                    <p>
                        Durante o reinado do imperador Nero, um incêndio generalizado foi desencadeado em Roma, pelo qual ele culpou os cristãos. Isso levou à crucificação de São Pedro em um local anteriormente conhecido como Circo de Nero. Ele pediu para ser crucificado com a cabeça voltada para baixo porque não se considerava digno o suficiente para morrer da mesma forma que Jesus.
                    </p>

                </div>
           </section>
           
           <section className={styles.igrejasPrimitivas}>
                <div>
                    
                </div>
           </section>

       </div>
    )
}