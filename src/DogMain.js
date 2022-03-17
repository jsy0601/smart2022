import { faker } from '@faker-js/faker';
import dog from './dog.jpg';

//JSX
const testData = [
  {
    text: "대통령은 헌법과 법률이 정하는 바에 의하여 공무원을 임면한다.",
    imgUrl: "https://file.thisisgame.com/upload/tboard/user/2013/06/25/20130625165342_3182.jpg"
  },{
    text: "국회는 법률에 저촉되지 아니하는 범위안에서 의사와 내부규율에 관한 규칙을 제정할 수 있다.",
    imgUrl: "https://file.thisisgame.com/upload/tboard/user/2013/06/25/20130625165343_9591.jpg"
  }, {
    text: "의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.",
    imgUrl: "https://file.thisisgame.com/upload/tboard/user/2013/06/25/20130625165332_3141.jpeg"
  }
]

function DogMain() {
  const h1Element = <h1>{props.title}</h1>;
  const imgElemnet = <img src={dog} className="App-logo" alt="logo" />;

  return (
    <>
        { h1Element }
        { imgElemnet }
        <p>
            히히 <code>src/App.js</code> and save to reload.
        </p>
        <ul>
            {testData.map((contents)=>{
            return <div>
                <img src={faker.image.avatar()} alt="강아지 사진" />
                {contents.text}
                <img src={faker.image.cats()} alt="강아지 사진" />
                </div>
            })}
        </ul>
    </>
  );
}

export default DogMain;
