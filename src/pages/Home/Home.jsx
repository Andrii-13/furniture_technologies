import { Container } from 'components/App/App.styled';
import React from 'react';
import { BackgroundImg, HomeWrap, VideoWrap } from './Home.styled';
import fon from '../../data/images/kyt.jpg';
import ReactPlayer from 'react-player';
import { Title } from 'components/App/Title/Title';

export const Home = () => {
  return (
    <HomeWrap>
      <Container>
        <BackgroundImg>
          <img src={fon} alt="construction corner" />
        </BackgroundImg>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            margin: '20px 0',
          }}
        >
          <Title>ТОВ «ТД «ПРОФІЛЬНІ ТЕХНОЛОГІЇ»» ТМ «Штукатур»</Title>
          <h2>
            Компанія ТОВ "ТД "Профільні технології"- лідер з виробництва якісних
            профілів, створених для професіоналів.
          </h2>
          <p>
            Компанія ТОВ "ТД "Профільні технології" пропонує Вашій увазі профіля
            торгової марки «Штукатур». «Штукатур» завойовує довіру нових
            споживачів і міцно утримує довіру старих. Застосовуючи профіля
            «Штукатур» Ви отримаєте рівні стіни, без зайвих витрат фінансів, і
            часу
          </p>
          <p>
            Штукатур™ об'єднує чотири групи товарів, що використовуються для
            штукатурно-оздоблювальних робіт: куточки, маяки, арки та стрічки,
            сітки. Товари вигідно відрізняються такими перевагами як:
          </p>
          <p> - бездоганна якість за вигідну ціну;</p>
          <p>- завжди всі товари в повному обсязі на складі;</p>
          <p>- ми завжди можемо зробити стільки – скільки Вам потрібно.</p>
          <p>
            Про якість товару Штукатур свідчить широке коло наших постійних
            споживачів.
          </p>
          <p>
            Штукатур™ об'єднує чотири групи товарів, що використовуються для
            штукатурно-оздоблювальних робіт: куточки, маяки, арки та стрічки,
            сітки. Товари вигідно відрізняються такими перевагами як:
          </p>
          <p> - бездоганна якість за вигідну ціну;</p>
          <p>- завжди всі товари в повному обсязі на складі;</p>
          <p>- ми завжди можемо зробити стільки – скільки Вам потрібно.</p>
          <p>
            Про якість товару Штукатур свідчить широке коло наших постійних
            споживачів.
          </p>
          <p>
            Штукатур™ об'єднує чотири групи товарів, що використовуються для
            штукатурно-оздоблювальних робіт: куточки, маяки, арки та стрічки,
            сітки. Товари вигідно відрізняються такими перевагами як:
          </p>
          <p> - бездоганна якість за вигідну ціну;</p>
          <p>- завжди всі товари в повному обсязі на складі;</p>
          <p>- ми завжди можемо зробити стільки – скільки Вам потрібно.</p>
          <p>
            Про якість товару Штукатур свідчить широке коло наших постійних
            споживачів.
          </p>

          <VideoWrap className="player">
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=oUFJJNQGwhk"
              width="100%"
              height="100%"
            />
          </VideoWrap>
        </div>
      </Container>
    </HomeWrap>
  );
};