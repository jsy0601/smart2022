import faker from '@faker-js/faker';  //영문 버전의 fakerjs
import faker_ko from '@faker-js/faker/locale/ko';  //한글 버전의 fakerjs
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './App.css';


function App() {
  const userDatas = [];

  while(userDatas.length < 5){
    userDatas.push({
      avatar: faker.image.avatar(),
      name: `${faker_ko.name.lastName()}${faker_ko.name.firstName()}`,
      email: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      phoneNo: faker.phone.phoneNumber()
    })
  }

  const userCards = userDatas.map((userData, idx) => {
    return <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="345"
      image={ userData.avatar }
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        <h4>{ userData.jobTitle }</h4>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <h5>{ userData.name }</h5>
        {userData.email} <br />
        {userData.phoneNo}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
    // <div key={idx}>
    //   <h4>{ userData.jobTitle }</h4>
    //   <img src={ userData.avatar } alt="사용자 프로필용 아바타"></img>
    //   <h5>{ userData.name }</h5>
    //   {userData.email} <br />
    //   {userData.phoneNo}
    // </div>
  })

  console.log(userDatas)
  return (
    <div className="App">
        {userCards}
    </div>
  );
}

export default App;
