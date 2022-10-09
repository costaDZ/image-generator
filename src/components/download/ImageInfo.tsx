import styled from 'styled-components';

type tableHeadType = {
  name: string;
  propValue:
    | 'targetType'
    | 'extention'
    | 'bigResolution'
    | 'targetSize'
    | 'likes'
    | 'downloads'
    | 'views';
};

const tableHead: tableHeadType[] = [
  {
    name: 'file',
    propValue: 'targetType'
  },
  {
    name: 'type',
    propValue: 'extention'
  },
  {
    name: 'resolution',
    propValue: 'bigResolution'
  },
  {
    name: 'size',
    propValue: 'targetSize'
  },
  {
    name: 'likes',
    propValue: 'likes'
  },
  {
    name: 'downloads',
    propValue: 'downloads'
  },
  {
    name: 'views',
    propValue: 'views'
  }
];

const ImageInfo = (props: Download) => {
  return (
    <ImageInfoStyled>
      <tbody>
        {tableHead.map((value, idx) => (
          <tr key={idx}>
            <th>{value.name} :</th>
            <td>{props[value.propValue]}</td>
          </tr>
        ))}
      </tbody>
    </ImageInfoStyled>
  );
};

export default ImageInfo;

const ImageInfoStyled = styled.table`
  width: 100%;
  color: var(--grey-text);
  line-height: 2;

  th {
    text-align: start;
  }
`;
