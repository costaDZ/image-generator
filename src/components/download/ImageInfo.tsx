import React from 'react';
import styled from 'styled-components';

interface ImageInfoProps {
  targetType: any;
  extention: any;
  targetSize: any;
  bigResolution: any;
  normalResolution: any;
  smallResolution: any;
  tags: any;
  views: any;
  downloads: any;
  type: any;
  likes: any;
}

const ImageInfo = ({
  targetType,
  extention,
  targetSize,
  bigResolution,
  normalResolution,
  smallResolution,
  tags,
  views,
  downloads,
  type,
  likes
}: ImageInfoProps) => {
  return (
    <ImageInfoStyled>
      <tbody>
        <tr>
          <th>file :</th>
          <td>{targetType}</td>
        </tr>
        <tr>
          <th>type : </th>
          <td>{extention}</td>
        </tr>
        <tr>
          <th>resolution : </th>
          <td>{bigResolution}</td>
        </tr>
        <tr>
          <th>size : </th>
          <td>{targetSize}</td>
        </tr>
        <tr>
          <th>likes : </th>
          <td>{likes}</td>
        </tr>
        <tr>
          <th>downloads : </th>
          <td>{downloads}</td>
        </tr>
        <tr>
          <th>views : </th>
          <td>{views}</td>
        </tr>
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
