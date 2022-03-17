import faker from '@faker-js/faker';  //영문 버전의 fakerjs
import faker_ko from '@faker-js/faker/locale/ko';  //한글 버전의 fakerjs
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import UserCard from './components/UserCard';

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

function App() {
  const userCards = userDatas.map((userData, idx) => {
    return <Grid item xs={2} sm={4} md={4} key={idx}>
       <UserCard userData={userData} />;
      </Grid>
  })

  console.log(userDatas)
  return (
    <Container maxWidth="lg" sx={{p:1}}>
      <Grid container spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12}}>
          {userCards}
      </Grid>
    </Container>
  );
}

export default App;