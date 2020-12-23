import Date from './date';
import CoverImage from './cover-image';
import Link from 'next/link';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

// Can be as Bootstrap card
export default function Post({ title, coverImage, date, slug, description }) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className="cursor-pointer">
        <Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src={coverImage.responsiveImage.srcSet} />
          <Card.Body>
            <Card.ImgOverlay>
              {/* <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
          slug={slug}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
      </div> */}
              <Card.Title className="bg-gray-50 text-center uppercase">
                {title}
              </Card.Title>
            </Card.ImgOverlay>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
}
