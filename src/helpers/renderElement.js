//import objectToAbcTune from './objectToAbcTune';
import { v4 } from 'uuid';

import styled from 'styled-components';

// import elements templates
import Para from '../components/ContentUtils/Para/Para';

import Topic from '../components/ContentUtils/Topic/Topic';
import ListItem from '../components/ContentUtils/ListItem/ListItem';
import Tune from '../components/ContentUtils/Tune/Tune';
import VideosMat from '../components/ContentUtils/VideosMat/VideosMat';
import ComingSoon from '../components/ContentUtils/ComingSoon/ComingSoon';
import TopicHeader from '../components/ContentUtils/TopicHeader/TopicHeader';
import objectToAbcTune from './objectToAbcTune';

const listItemFlex = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

function renderElement(element, value, index) {
  switch (element) {
    case 'chapterHeader': {
      return <h1 key={index}>{value}</h1>;
    }
    case 'lessonHeader': {
      return <h2 key={index}>{value}</h2>;
    }
    case 'uList': {
      return (
        <ul key={index} style={{ margin: 0, padding: 0 }}>
          {value.map((item, index) => {
            const elementKey = Object.keys(item)[0];
            const elementValue = item[elementKey];
            return (
              <li key={index} style={{ padding: 0, margin: 0 }}>
                {renderElement(elementKey, elementValue, index)}
              </li>
            );
          })}
        </ul>
      );
    }
    case 'oList': {
      return (
        <ol key={index}>
          {value.map((item, index) => {
            const elementKey = Object.keys(item)[0];
            const elementValue = item[elementKey];
            return <li key={index}>{renderElement(elementKey, elementValue, index)}</li>;
          })}
        </ol>
      );
    }
    case 'para': {
      return <Para key={index}>{value}</Para>;
    }
    case 'listItem': {
      return (
        <Para isItem key={index}>
          {value}
        </Para>
      );
    }
    case 'tune': {
      return <Tune key={index} id={v4()} tune={objectToAbcTune(value)} />;
    }
    case 'topicHeader': {
      return <TopicHeader key={index}>{value}</TopicHeader>;
    }
    case 'videosMat': {
      return <VideosMat key={index} value={value} />;
    }
    case 'topic': {
      return <Topic key={index} value={value} index={index} />;
    }
    case 'comingSoon': {
      return <ComingSoon key={index} />;
    }
    default: {
      return <p key={index}>not in switch-case function</p>;
    }
  }
}

export default renderElement;
