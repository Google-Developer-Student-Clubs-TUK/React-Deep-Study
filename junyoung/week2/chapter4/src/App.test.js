import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
    it('renders componet correctly', () => {
      const {container} = render(<App />); 
      expect(container.getElementsByClassName('App-logo'))
      .toHaveLength(1);//App-logo에 해당하는 한개의 html요소 존재하는지
      expect(container.getElementsByClassName('App-logo')[0])
      .toHaveAttribute(//해당이미지가 실제로 우리가 원하는 이미지를 보여주는지 판단
        'src',
        'logo.svg'
      );
      expect(container).toMatchSnapshot();
    });
});

//container: 리액트컴포넌트에서 화면에 표시되는 부분
//스냅샷: html구조가 변하면 u키 눌러서 업데이트 해줘야함