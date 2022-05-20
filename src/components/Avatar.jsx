import { faker } from '@faker-js/faker';

const Avatar = ()=> {
  return (
    <div className='avatar'>
      <img src={faker.image.avatar()} height="30px" width="30px"
        style={{borderRadius: 20, marginTop: 10, marginRight: 10}} />
      <div className="fake-info">
        <p className="fake-name">{faker.name.firstName()}</p>
        <p className="fake-title">{faker.name.jobType()}</p>
      </div>
    </div>
);
}

export default Avatar;
