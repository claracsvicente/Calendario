import './index.scss';
import { useState } from 'react';

function Calendario() {
  const [mes, setMes] = useState('janeiro')
  const [dia, setDia] = useState('1 de janeiro')
  const [recado, setRecado] = useState('')
  const [botao, setBotao] = useState(() => {
    return JSON.parse(localStorage.getItem('recados') || '[]');
  })

  function guardar() {
    if (recado.trim() === '') return;

    const novaLista = {
        ...botao,
        [dia]: [...(botao[dia] || []), recado]
    };

    setBotao(novaLista);
    localStorage.setItem('recados', JSON.stringify(novaLista));
    setRecado('')
  }

  function excluir(indexExcluir) {
    const novaLista = {
        ...botao,
        [dia]: (botao[dia] || []).filter(
            (item, index) => index !== indexExcluir
        )
    };

    setBotao(novaLista);
    localStorage.setItem('recados', JSON.stringify(novaLista));
  }

  return (
    <div className="App">
      <section className='calendario'>
        <div className='conteiner1'>
          <nav>
            <div>
              <button onClick={() => setMes('janeiro')}>Janeiro</button>
              <button onClick={() => setMes('fevereiro')}>Fevereiro</button>
              <button onClick={() => setMes('marco')}>Março</button>
              <button onClick={() => setMes('abril')}>Abril</button>
              <button onClick={() => setMes('maio')}>Maio</button>
              <button onClick={() => setMes('junho')}>Junho</button>
            </div>
            <div>
              <button onClick={() => setMes('julho')}>Julho</button>
              <button onClick={() => setMes('agosto')}>Agosto</button>
              <button onClick={() => setMes('setembro')}>Setembro</button>
              <button onClick={() => setMes('outubro')}>Outubro</button>
              <button onClick={() => setMes('novembro')}>Novembro</button>
              <button onClick={() => setMes('dezembro')}>Dezembro</button>
            </div>
          </nav>
          
          <main>
            {mes === 'janeiro' && (
              <div className='div'>
                <h1>Janeiro</h1>
                
                <header>
                  <section>
                    <b>D</b>
                    <button>.</button>
                    <button onClick={() => setDia('3 de janeiro')}>3</button>
                    <button onClick={() => setDia('10 de janeiro')}>10</button>
                    <button onClick={() => setDia('17 de janeiro')}>17</button>
                    <button onClick={() => setDia('24 de janeiro')}>24</button>
                    <button onClick={() => setDia('31 de janeiro')}>31</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button>.</button>
                    <button onClick={() => setDia('4 de janeiro')}>4</button>
                    <button onClick={() => setDia('11 de janeiro')}>11</button>
                    <button onClick={() => setDia('18 de janeiro')}>18</button>
                    <button onClick={() => setDia('25 de janeiro')}>25</button>
                  </section>

                  <section>
                    <b>T</b>
                    <button>.</button>
                    <button onClick={() => setDia('5 de janeiro')}>5</button>
                    <button onClick={() => setDia('12 de janeiro')}>12</button>
                    <button onClick={() => setDia('19 de janeiro')}>19</button>
                    <button onClick={() => setDia('26 de janeiro')}>26</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button>.</button>
                    <button onClick={() => setDia('6 de janeiro')}>6</button>
                    <button onClick={() => setDia('13 de janeiro')}>13</button>
                    <button onClick={() => setDia('20 de janeiro')}>20</button>
                    <button onClick={() => setDia('27 de janeiro')}>27</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button>.</button>
                    <button onClick={() => setDia('7 de janeiro')}>7</button>
                    <button onClick={() => setDia('14 de janeiro')}>14</button>
                    <button onClick={() => setDia('21 de janeiro')}>21</button>
                    <button onClick={() => setDia('28 de janeiro')}>28</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('1 de janeiro')}>1</button>
                    <button onClick={() => setDia('8 de janeiro')}>8</button>
                    <button onClick={() => setDia('15 de janeiro')}>15</button>
                    <button onClick={() => setDia('22 de janeiro')}>22</button>
                    <button onClick={() => setDia('29 de janeiro')}>29</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('2 de janeiro')}>2</button>
                    <button onClick={() => setDia('9 de janeiro')}>9</button>
                    <button onClick={() => setDia('16 de janeiro')}>16</button>
                    <button onClick={() => setDia('23 de janeiro')}>23</button>
                    <button onClick={() => setDia('30 de janeiro')}>30</button>
                  </section>
                </header>
              </div>
            )}

            {mes === 'fevereiro' && (
              <div className='div'>
                <h1>Fevereiro</h1>

                <header>
                  <section>
                    <b>D</b>
                    <button>.</button>
                    <button onClick={() => setDia('7 de fevereiro')}>7</button>
                    <button onClick={() => setDia('14 de fevereiro')}>14</button>
                    <button onClick={() => setDia('21 de fevereiro')}>21</button>
                    <button onClick={() => setDia('28 de fevereiro')}>28</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('1 de fevereiro')}>1</button>
                    <button onClick={() => setDia('8 de fevereiro')}>8</button>
                    <button onClick={() => setDia('15 de fevereiro')}>15</button>
                    <button onClick={() => setDia('22 de fevereiro')}>22</button>
                  </section>

                  <section>
                    <b>T</b>
                    <button onClick={() => setDia('2 de fevereiro')}>2</button>
                    <button onClick={() => setDia('9 de fevereiro')}>9</button>
                    <button onClick={() => setDia('16 de fevereiro')}>16</button>
                    <button onClick={() => setDia('23 de fevereiro')}>23</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button onClick={() => setDia('3 de fevereiro')}>3</button>
                    <button onClick={() => setDia('10 de fevereiro')}>10</button>
                    <button onClick={() => setDia('17 de fevereiro')}>17</button>
                    <button onClick={() => setDia('24 de fevereiro')}>24</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button onClick={() => setDia('4 de fevereiro')}>4</button>
                    <button onClick={() => setDia('11 de fevereiro')}>11</button>
                    <button onClick={() => setDia('18 de fevereiro')}>18</button>
                    <button onClick={() => setDia('25 de fevereiro')}>25</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('5 de fevereiro')}>5</button>
                    <button onClick={() => setDia('12 de fevereiro')}>12</button>
                    <button onClick={() => setDia('19 de fevereiro')}>19</button>
                    <button onClick={() => setDia('26 de fevereiro')}>26</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('6 de fevereiro')}>6</button>
                    <button onClick={() => setDia('13 de fevereiro')}>13</button>
                    <button onClick={() => setDia('20 de fevereiro')}>20</button>
                    <button onClick={() => setDia('27 de fevereiro')}>27</button>
                  </section>
                </header>
              </div>
            )}

            {mes === 'marco' && (
              <div className='div'>
                <h1>Março</h1>

                <header>
                  <section>
                    <b>D</b>
                    <button>.</button>
                    <button onClick={() => setDia('7 de março')}>7</button>
                    <button onClick={() => setDia('14 de março')}>14</button>
                    <button onClick={() => setDia('21 de março')}>21</button>
                    <button onClick={() => setDia('28 de março')}>28</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('1 de março')}>1</button>
                    <button onClick={() => setDia('8 de março')}>8</button>
                    <button onClick={() => setDia('15 de março')}>15</button>
                    <button onClick={() => setDia('22 de março')}>22</button>
                    <button onClick={() => setDia('29 de março')}>29</button>
                  </section>

                  <section>
                    <b>T</b>
                    <button onClick={() => setDia('2 de março')}>2</button>
                    <button onClick={() => setDia('9 de março')}>9</button>
                    <button onClick={() => setDia('16 de março')}>16</button>
                    <button onClick={() => setDia('23 de março')}>23</button>
                    <button onClick={() => setDia('30 de março')}>30</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button onClick={() => setDia('3 de março')}>3</button>
                    <button onClick={() => setDia('10 de março')}>10</button>
                    <button onClick={() => setDia('17 de março')}>17</button>
                    <button onClick={() => setDia('24 de março')}>24</button>
                    <button onClick={() => setDia('31 de março')}>31</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button onClick={() => setDia('4 de março')}>4</button>
                    <button onClick={() => setDia('11 de março')}>11</button>
                    <button onClick={() => setDia('18 de março')}>18</button>
                    <button onClick={() => setDia('25 de março')}>25</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('5 de março')}>5</button>
                    <button onClick={() => setDia('12 de março')}>12</button>
                    <button onClick={() => setDia('19 de março')}>19</button>
                    <button onClick={() => setDia('26 de março')}>26</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('6 de março')}>6</button>
                    <button onClick={() => setDia('13 de março')}>13</button>
                    <button onClick={() => setDia('20 de março')}>20</button>
                    <button onClick={() => setDia('27 de março')}>27</button>
                  </section>
                </header>
              </div>
            )}

            {mes === 'abril' && (
              <div className='div'>
                <h1>Abril</h1>

                <header>
                  <section>
                    <b>D</b>
                    <button>.</button>
                    <button onClick={() => setDia('4 de abril')}>4</button>
                    <button onClick={() => setDia('11 de abril')}>11</button>
                    <button onClick={() => setDia('18 de abril')}>18</button>
                    <button onClick={() => setDia('25 de abril')}>25</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button>.</button>
                    <button onClick={() => setDia('5 de abril')}>5</button>
                    <button onClick={() => setDia('12 de abril')}>12</button>
                    <button onClick={() => setDia('19 de abril')}>19</button>
                    <button onClick={() => setDia('26 de abril')}>26</button>
                  </section>

                  <section>
                    <b>T</b>
                    <button>.</button>
                    <button onClick={() => setDia('6 de abril')}>6</button>
                    <button onClick={() => setDia('13 de abril')}>13</button>
                    <button onClick={() => setDia('20 de abril')}>20</button>
                    <button onClick={() => setDia('27 de abril')}>27</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button>.</button>
                    <button onClick={() => setDia('7 de abril')}>7</button>
                    <button onClick={() => setDia('14 de abril')}>14</button>
                    <button onClick={() => setDia('21 de abril')}>21</button>
                    <button onClick={() => setDia('28 de abril')}>28</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button onClick={() => setDia('1 de abril')}>1</button>
                    <button onClick={() => setDia('8 de abril')}>8</button>
                    <button onClick={() => setDia('15 de abril')}>15</button>
                    <button onClick={() => setDia('22 de abril')}>22</button>
                    <button onClick={() => setDia('29 de abril')}>29</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('2 de abril')}>2</button>
                    <button onClick={() => setDia('9 de abril')}>9</button>
                    <button onClick={() => setDia('16 de abril')}>16</button>
                    <button onClick={() => setDia('23 de abril')}>23</button>
                    <button onClick={() => setDia('30 de abril')}>30</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('3 de abril')}>3</button>
                    <button onClick={() => setDia('10 de abril')}>10</button>
                    <button onClick={() => setDia('17 de abril')}>17</button>
                    <button onClick={() => setDia('24 de abril')}>24</button>
                  </section>
                </header>
              </div>
            )}

            {mes === 'maio' && (
              <div className='div'>
                <h1>Maio</h1>

                <header>
                  <section>
                    <b>D</b>
                    <button>.</button>
                    <button onClick={() => setDia('2 de maio')}>2</button>
                    <button onClick={() => setDia('9 de maio')}>9</button>
                    <button onClick={() => setDia('16 de maio')}>16</button>
                    <button onClick={() => setDia('23 de maio')}>23</button>
                    <button onClick={() => setDia('30 de maio')}>30</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button>.</button>
                    <button onClick={() => setDia('3 de maio')}>3</button>
                    <button onClick={() => setDia('10 de maio')}>10</button>
                    <button onClick={() => setDia('17 de maio')}>17</button>
                    <button onClick={() => setDia('24 de maio')}>24</button>
                    <button onClick={() => setDia('31 de maio')}>31</button>
                  </section>

                  <section>
                    <b>T</b>
                    <button>.</button>
                    <button onClick={() => setDia('4 de maio')}>4</button>
                    <button onClick={() => setDia('11 de maio')}>11</button>
                    <button onClick={() => setDia('18 de maio')}>18</button>
                    <button onClick={() => setDia('25 de maio')}>25</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button>.</button>
                    <button onClick={() => setDia('5 de maio')}>5</button>
                    <button onClick={() => setDia('12 de maio')}>12</button>
                    <button onClick={() => setDia('19 de maio')}>19</button>
                    <button onClick={() => setDia('26 de maio')}>26</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button>.</button>
                    <button onClick={() => setDia('6 de maio')}>6</button>
                    <button onClick={() => setDia('13 de maio')}>13</button>
                    <button onClick={() => setDia('20 de maio')}>20</button>
                    <button onClick={() => setDia('27 de maio')}>27</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button>.</button>
                    <button onClick={() => setDia('7 de maio')}>7</button>
                    <button onClick={() => setDia('14 de maio')}>14</button>
                    <button onClick={() => setDia('21 de maio')}>21</button>
                    <button onClick={() => setDia('28 de maio')}>28</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('1 de maio')}>1</button>
                    <button onClick={() => setDia('8 de maio')}>8</button>
                    <button onClick={() => setDia('15 de maio')}>15</button>
                    <button onClick={() => setDia('22 de maio')}>22</button>
                    <button onClick={() => setDia('29 de maio')}>29</button>
                  </section>
                </header>
              </div>
            )}

            {mes === 'junho' && (
              <div className='div'>
                <h1>Junho</h1>

                <header>
                  <section>
                    <b>D</b>
                    <button>.</button>
                    <button onClick={() => setDia('6 de junho')}>6</button>
                    <button onClick={() => setDia('13 de junho')}>13</button>
                    <button onClick={() => setDia('20 de junho')}>20</button>
                    <button onClick={() => setDia('27 de junho')}>27</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button>.</button>
                    <button onClick={() => setDia('7 de junho')}>7</button>
                    <button onClick={() => setDia('14 de junho')}>14</button>
                    <button onClick={() => setDia('21 de junho')}>21</button>
                    <button onClick={() => setDia('28 de junho')}>28</button>
                  </section>

                  <section>
                    <b>T</b>
                    <button onClick={() => setDia('1 de junho')}>1</button>
                    <button onClick={() => setDia('8 de junho')}>8</button>
                    <button onClick={() => setDia('15 de junho')}>15</button>
                    <button onClick={() => setDia('22 de junho')}>22</button>
                    <button onClick={() => setDia('29 de junho')}>29</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button onClick={() => setDia('2 de junho')}>2</button>
                    <button onClick={() => setDia('9 de junho')}>9</button>
                    <button onClick={() => setDia('16 de junho')}>16</button>
                    <button onClick={() => setDia('23 de junho')}>23</button>
                    <button onClick={() => setDia('30 de junho')}>30</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button onClick={() => setDia('3 de junho')}>3</button>
                    <button onClick={() => setDia('10 de junho')}>10</button>
                    <button onClick={() => setDia('17 de junho')}>17</button>
                    <button onClick={() => setDia('24 de junho')}>24</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('4 de junho')}>4</button>
                    <button onClick={() => setDia('11 de junho')}>11</button>
                    <button onClick={() => setDia('18 de junho')}>18</button>
                    <button onClick={() => setDia('25 de junho')}>25</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('5 de junho')}>5</button>
                    <button onClick={() => setDia('12 de junho')}>12</button>
                    <button onClick={() => setDia('19 de junho')}>19</button>
                    <button onClick={() => setDia('26 de junho')}>26</button>
                  </section>
                </header>
              </div>
            )}

            {mes === 'julho' && (
              <div className='div'>
                <h1>Julho</h1>
                
                <header>
                  <section>
                    <b>D</b>
                    <button>.</button>
                    <button onClick={() => setDia('4 de julho')}>4</button>
                    <button onClick={() => setDia('11 de julho')}>11</button>
                    <button onClick={() => setDia('18 de julho')}>18</button>
                    <button onClick={() => setDia('25 de julho')}>25</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button>.</button>
                    <button onClick={() => setDia('5 de julho')}>5</button>
                    <button onClick={() => setDia('12 de julho')}>12</button>
                    <button onClick={() => setDia('19 de julho')}>19</button>
                    <button onClick={() => setDia('26 de julho')}>26</button>
                  </section>

                  <section>
                    <b>T</b>
                    <button>.</button>
                    <button onClick={() => setDia('6 de julho')}>6</button>
                    <button onClick={() => setDia('13 de julho')}>13</button>
                    <button onClick={() => setDia('20 de julho')}>20</button>
                    <button onClick={() => setDia('27 de julho')}>27</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button>.</button>
                    <button onClick={() => setDia('7 de julho')}>7</button>
                    <button onClick={() => setDia('14 de julho')}>14</button>
                    <button onClick={() => setDia('21 de julho')}>21</button>
                    <button onClick={() => setDia('28 de julho')}>28</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button onClick={() => setDia('1 de julho')}>1</button>
                    <button onClick={() => setDia('8 de julho')}>8</button>
                    <button onClick={() => setDia('15 de julho')}>15</button>
                    <button onClick={() => setDia('22 de julho')}>22</button>
                    <button onClick={() => setDia('29 de julho')}>29</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('2 de julho')}>2</button>
                    <button onClick={() => setDia('9 de julho')}>9</button>
                    <button onClick={() => setDia('16 de julho')}>16</button>
                    <button onClick={() => setDia('23 de julho')}>23</button>
                    <button onClick={() => setDia('30 de julho')}>30</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('3 de julho')}>3</button>
                    <button onClick={() => setDia('10 de julho')}>10</button>
                    <button onClick={() => setDia('17 de julho')}>17</button>
                    <button onClick={() => setDia('24 de julho')}>24</button>
                    <button onClick={() => setDia('31 de julho')}>31</button>
                  </section>
                </header>
              </div>
            )}

            {mes === 'agosto' && (
              <div className='div'>
                <h1>Agosto</h1>

                <header>
                  <section>
                    <b>D</b>
                    <button onClick={() => setDia('1 de agosto')}>1</button>
                    <button onClick={() => setDia('8 de agosto')}>8</button>
                    <button onClick={() => setDia('15 de agosto')}>15</button>
                    <button onClick={() => setDia('22 de agosto')}>22</button>
                    <button onClick={() => setDia('29 de agosto')}>29</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('2 de agosto')}>2</button>
                    <button onClick={() => setDia('9 de agosto')}>9</button>
                    <button onClick={() => setDia('16 de agosto')}>16</button>
                    <button onClick={() => setDia('23 de agosto')}>23</button>
                    <button onClick={() => setDia('30 de agosto')}>30</button>
                  </section>

                  <section>
                    <b>T</b>
                    <button onClick={() => setDia('3 de agosto')}>3</button>
                    <button onClick={() => setDia('10 de agosto')}>10</button>
                    <button onClick={() => setDia('17 de agosto')}>17</button>
                    <button onClick={() => setDia('24 de agosto')}>24</button>
                    <button onClick={() => setDia('31 de agosto')}>31</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button onClick={() => setDia('4 de agosto')}>4</button>
                    <button onClick={() => setDia('11 de agosto')}>11</button>
                    <button onClick={() => setDia('18 de agosto')}>18</button>
                    <button onClick={() => setDia('25 de agosto')}>25</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button onClick={() => setDia('5 de agosto')}>5</button>
                    <button onClick={() => setDia('12 de agosto')}>12</button>
                    <button onClick={() => setDia('19 de agosto')}>19</button>
                    <button onClick={() => setDia('26 de agosto')}>26</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('6 de agosto')}>6</button>
                    <button onClick={() => setDia('13 de agosto')}>13</button>
                    <button onClick={() => setDia('20 de agosto')}>20</button>
                    <button onClick={() => setDia('27 de agosto')}>27</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('7 de agosto')}>7</button>
                    <button onClick={() => setDia('14 de agosto')}>14</button>
                    <button onClick={() => setDia('21 de agosto')}>21</button>
                    <button onClick={() => setDia('28 de agosto')}>28</button>
                  </section>
                </header>
              </div>
            )}

            {mes === 'setembro' && (
              <div className='div'>
                <h1>Setembro</h1>

                <header>
                  <section>
                    <b>D</b>
                    <button>.</button>
                    <button onClick={() => setDia('5 de setembro')}>5</button>
                    <button onClick={() => setDia('12 de setembro')}>12</button>
                    <button onClick={() => setDia('19 de setembro')}>19</button>
                    <button onClick={() => setDia('26 de setembro')}>26</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button>.</button>
                    <button onClick={() => setDia('6 de setembro')}>6</button>
                    <button onClick={() => setDia('13 de setembro')}>13</button>
                    <button onClick={() => setDia('20 de setembro')}>20</button>
                    <button onClick={() => setDia('27 de setembro')}>27</button>
                  </section>

                  <section>
                    <b>T</b>
                    <button>.</button>
                    <button onClick={() => setDia('7 de setembro')}>7</button>
                    <button onClick={() => setDia('14 de setembro')}>14</button>
                    <button onClick={() => setDia('21 de setembro')}>21</button>
                    <button onClick={() => setDia('28 de setembro')}>28</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button onClick={() => setDia('1 de setembro')}>1</button>
                    <button onClick={() => setDia('8 de setembro')}>8</button>
                    <button onClick={() => setDia('15 de setembro')}>15</button>
                    <button onClick={() => setDia('22 de setembro')}>22</button>
                    <button onClick={() => setDia('29 de setembro')}>29</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button onClick={() => setDia('2 de setembro')}>2</button>
                    <button onClick={() => setDia('9 de setembro')}>9</button>
                    <button onClick={() => setDia('16 de setembro')}>16</button>
                    <button onClick={() => setDia('23 de setembro')}>23</button>
                    <button onClick={() => setDia('30 de setembro')}>30</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('3 de setembro')}>3</button>
                    <button onClick={() => setDia('10 de setembro')}>10</button>
                    <button onClick={() => setDia('17 de setembro')}>17</button>
                    <button onClick={() => setDia('24 de setembro')}>24</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('4 de setembro')}>4</button>
                    <button onClick={() => setDia('11 de setembro')}>11</button>
                    <button onClick={() => setDia('18 de setembro')}>18</button>
                    <button onClick={() => setDia('25 de setembro')}>25</button>
                  </section>
                </header>
              </div>
            )}

            {mes === 'outubro' && (
              <div className='div'>
                <h1>Outubro</h1>

                <header>
                  <section>
                    <b>D</b>
                    <button>.</button>
                    <button onClick={() => setDia('3 de outubro')}>3</button>
                    <button onClick={() => setDia('10 de outubro')}>10</button>
                    <button onClick={() => setDia('17 de outubro')}>17</button>
                    <button onClick={() => setDia('24 de outubro')}>24</button>
                    <button onClick={() => setDia('31 de outubro')}>31</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button>.</button>
                    <button onClick={() => setDia('4 de outubro')}>4</button>
                    <button onClick={() => setDia('11 de outubro')}>11</button>
                    <button onClick={() => setDia('18 de outubro')}>18</button>
                    <button onClick={() => setDia('25 de outubro')}>25</button>
                  </section>

                  <section>
                    <b>T</b>
                    <button>.</button>
                    <button onClick={() => setDia('5 de outubro')}>5</button>
                    <button onClick={() => setDia('12 de outubro')}>12</button>
                    <button onClick={() => setDia('19 de outubro')}>19</button>
                    <button onClick={() => setDia('26 de outubro')}>26</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button>.</button>
                    <button onClick={() => setDia('6 de outubro')}>6</button>
                    <button onClick={() => setDia('13 de outubro')}>13</button>
                    <button onClick={() => setDia('20 de outubro')}>20</button>
                    <button onClick={() => setDia('27 de outubro')}>27</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button>.</button>
                    <button onClick={() => setDia('7 de outubro')}>7</button>
                    <button onClick={() => setDia('14 de outubro')}>14</button>
                    <button onClick={() => setDia('21 de outubro')}>21</button>
                    <button onClick={() => setDia('28 de outubro')}>28</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('1 de outubro')}>1</button>
                    <button onClick={() => setDia('8 de outubro')}>8</button>
                    <button onClick={() => setDia('15 de outubro')}>15</button>
                    <button onClick={() => setDia('22 de outubro')}>22</button>
                    <button onClick={() => setDia('29 de outubro')}>29</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('2 de outubro')}>2</button>
                    <button onClick={() => setDia('9 de outubro')}>9</button>
                    <button onClick={() => setDia('16 de outubro')}>16</button>
                    <button onClick={() => setDia('23 de outubro')}>23</button>
                    <button onClick={() => setDia('30 de outubro')}>30</button>
                  </section>
                </header>
              </div>
            )}

            {mes === 'novembro' && (
              <div className='div'>
                <h1>Novembro</h1>

                <header>
                  <section>
                    <b>D</b>
                    <button>.</button>
                    <button onClick={() => setDia('7 de novembro')}>7</button>
                    <button onClick={() => setDia('14 de novembro')}>14</button>
                    <button onClick={() => setDia('21 de novembro')}>21</button>
                    <button onClick={() => setDia('28 de novembro')}>28</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('1 de novembro')}>1</button>
                    <button onClick={() => setDia('8 de novembro')}>8</button>
                    <button onClick={() => setDia('15 de novembro')}>15</button>
                    <button onClick={() => setDia('22 de novembro')}>22</button>
                    <button onClick={() => setDia('29 de novembro')}>29</button>
                  </section>

                  <section>
                    <b>T</b>
                    <button onClick={() => setDia('2 de novembro')}>2</button>
                    <button onClick={() => setDia('9 de novembro')}>9</button>
                    <button onClick={() => setDia('16 de novembro')}>16</button>
                    <button onClick={() => setDia('23 de novembro')}>23</button>
                    <button onClick={() => setDia('30 de novembro')}>30</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button onClick={() => setDia('3 de novembro')}>3</button>
                    <button onClick={() => setDia('10 de novembro')}>10</button>
                    <button onClick={() => setDia('17 de novembro')}>17</button>
                    <button onClick={() => setDia('24 de novembro')}>24</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button onClick={() => setDia('4 de novembro')}>4</button>
                    <button onClick={() => setDia('11 de novembro')}>11</button>
                    <button onClick={() => setDia('18 de novembro')}>18</button>
                    <button onClick={() => setDia('25 de novembro')}>25</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('5 de novembro')}>5</button>
                    <button onClick={() => setDia('12 de novembro')}>12</button>
                    <button onClick={() => setDia('19 de novembro')}>19</button>
                    <button onClick={() => setDia('26 de novembro')}>26</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('6 de novembro')}>6</button>
                    <button onClick={() => setDia('13 de novembro')}>13</button>
                    <button onClick={() => setDia('20 de novembro')}>20</button>
                    <button onClick={() => setDia('27 de novembro')}>27</button>
                  </section>
                </header>
              </div>
            )}

            {mes === 'dezembro' && (
              <div className='div'>
                <h1>Dezembro</h1>
                
                <header>
                  <section>
                    <b>D</b>
                    <button>.</button>
                    <button onClick={() => setDia('5 de dezembro')}>5</button>
                    <button onClick={() => setDia('12 de dezembro')}>12</button>
                    <button onClick={() => setDia('19 de dezembro')}>19</button>
                    <button onClick={() => setDia('26 de dezembro')}>26</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button>.</button>
                    <button onClick={() => setDia('6 de dezembro')}>6</button>
                    <button onClick={() => setDia('13 de dezembro')}>13</button>
                    <button onClick={() => setDia('20 de dezembro')}>20</button>
                    <button onClick={() => setDia('27 de dezembro')}>27</button>
                  </section>

                  <section>
                    <b>T</b>
                    <button>.</button>
                    <button onClick={() => setDia('7 de dezembro')}>7</button>
                    <button onClick={() => setDia('14 de dezembro')}>14</button>
                    <button onClick={() => setDia('21 de dezembro')}>21</button>
                    <button onClick={() => setDia('28 de dezembro')}>28</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button onClick={() => setDia('1 de dezembro')}>1</button>
                    <button onClick={() => setDia('8 de dezembro')}>8</button>
                    <button onClick={() => setDia('15 de dezembro')}>15</button>
                    <button onClick={() => setDia('22 de dezembro')}>22</button>
                    <button onClick={() => setDia('29 de dezembro')}>29</button>
                  </section>

                  <section>
                    <b>Q</b>
                    <button onClick={() => setDia('2 de dezembro')}>2</button>
                    <button onClick={() => setDia('9 de dezembro')}>9</button>
                    <button onClick={() => setDia('16 de dezembro')}>16</button>
                    <button onClick={() => setDia('23 de dezembro')}>23</button>
                    <button onClick={() => setDia('30 de dezembro')}>30</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('3 de dezembro')}>3</button>
                    <button onClick={() => setDia('10 de dezembro')}>10</button>
                    <button onClick={() => setDia('17 de dezembro')}>17</button>
                    <button onClick={() => setDia('24 de dezembro')}>24</button>
                    <button onClick={() => setDia('31 de dezembro')}>31</button>
                  </section>

                  <section>
                    <b>S</b>
                    <button onClick={() => setDia('4 de dezembro')}>4</button>
                    <button onClick={() => setDia('11 de dezembro')}>11</button>
                    <button onClick={() => setDia('18 de dezembro')}>18</button>
                    <button onClick={() => setDia('25 de dezembro')}>25</button>
                  </section>
                </header>
              </div>
            )}
          </main>
        </div>

        <div className='conteiner2'>
          <div className='div'>
            <img src="/assets/images/celendar.png" alt="" />
            <h2>{dia}</h2>
          </div>

          <p>Que seja mais um mês repleto de boas escolhas</p>

          <main className='dias'>
            {dia === '1 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '2 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '3 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '4 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '5 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '6 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '7 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '8 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '9 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '10 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '11 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '12 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '13 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '14 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '15 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '16 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '17 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '18 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '19 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '20 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '21 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '22 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '23 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '24 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '25 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '26 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '27 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '28 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '29 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '30 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '31 de janeiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '1 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '2 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '3 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '4 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '5 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '6 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '7 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '8 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '9 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '10 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '11 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '12 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '13 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '14 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '15 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '16 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '17 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '18 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '19 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '20 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '21 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '22 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '23 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '24 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '25 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '26 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '27 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '28 de fevereiro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '1 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '2 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '3 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '4 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '5 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '6 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '7 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '8 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '9 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '10 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '11 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '12 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '13 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '14 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '15 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '16 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '17 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '18 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '19 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '20 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '21 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '22 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '23 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '24 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '25 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '26 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '27 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '28 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '29 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '30 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '31 de março' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '1 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '2 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '3 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '4 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '5 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '6 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '7 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '8 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '9 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '10 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '11 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '12 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '13 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '14 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '15 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '16 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '17 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '18 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '19 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '20 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '21 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '22 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '23 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '24 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '25 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '26 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '27 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '28 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '29 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '30 de abril' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '1 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '2 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '3 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '4 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '5 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '6 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '7 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '8 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '9 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '10 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '11 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '12 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '13 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '14 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '15 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '16 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '17 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '18 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '19 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '20 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '21 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '22 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '23 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '24 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '25 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '26 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '27 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '28 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '29 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '30 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '31 de maio' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '1 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '2 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '3 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '4 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '5 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '6 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '7 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '8 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '9 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '10 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '11 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '12 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '13 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '14 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '15 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '16 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '17 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '18 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '19 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '20 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '21 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '22 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '23 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '24 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '25 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '26 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '27 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '28 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '29 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '30 de junho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '1 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '2 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '3 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '4 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '5 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '6 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '7 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '8 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '9 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '10 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '11 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '12 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '13 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '14 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '15 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '16 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '17 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '18 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '19 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '20 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '21 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '22 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '23 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '24 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '25 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '26 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '27 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '28 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '29 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '30 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '31 de julho' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '1 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '2 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '3 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '4 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '5 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '6 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '7 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '8 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '9 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '10 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '11 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '12 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '13 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '14 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '15 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '16 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '17 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '18 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '19 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '20 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '21 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '22 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '23 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '24 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '25 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '26 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '27 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '28 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '29 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '30 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '31 de agosto' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '1 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '2 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '3 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '4 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '5 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '6 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '7 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '8 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '9 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '10 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '11 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '12 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '13 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '14 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '15 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '16 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '17 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '18 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '19 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '20 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '21 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '22 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '23 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '24 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '25 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '26 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '27 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '28 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '29 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '30 de setembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '1 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '2 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '3 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '4 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '5 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '6 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '7 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '8 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '9 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '10 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '11 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '12 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '13 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '14 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '15 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '16 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '17 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '18 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '19 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '20 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '21 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '22 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '23 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '24 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '25 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '26 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '27 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '28 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '29 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '30 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '31 de outubro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '1 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '2 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '3 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '4 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '5 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '6 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '7 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '8 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '9 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '10 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '11 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '12 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '13 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '14 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '15 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '16 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '17 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '18 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '19 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '20 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '21 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '22 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '23 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '24 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '25 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '26 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '27 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '28 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '29 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '30 de novembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '1 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '2 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '3 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '4 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '5 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '6 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '7 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '8 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '9 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '10 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '11 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '12 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '13 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '14 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '15 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '16 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '17 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '18 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '19 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '20 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '21 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '22 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '23 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '24 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '25 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '26 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '27 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '28 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '29 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '30 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {dia === '31 de dezembro' && (
              <section>
                <div>
                  <button onClick={guardar}>+</button>
                  <b>Adicionar recado</b>
                </div>

                <input type="text" placeholder='Digite...' onChange={(e) => setRecado(e.target.value)}/>

                <div className='ul'>
                  <b>Meus recados</b>

                  <ul>
                    {(botao[dia] || []).map((item, index) => (
                        <li key={index}>
                          <button onClick={() => excluir(index)}>-</button>
                          <p>{item}</p>
                        </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </main>
        </div>
      </section>
    </div>
  );
}

export default Calendario;