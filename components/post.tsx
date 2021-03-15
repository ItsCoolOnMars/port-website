import Date from './date';
import CoverImage from './cover-image';
import Link from 'next/link';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

// Can be as Bootstrap card
export default function Post({ title, coverImage, date, slug, description }) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className="cursor-pointer px-3 py-3">
        <Card style={{ width: '30rem', height: '100%' }}>
          <Card.Img
            variant="top"
            style={{ height: '40vh', width: '100%' }}
            src={coverImage.responsiveImage.srcSet}
          />
          <Card.Body>
            <Card.Text>
              <Card.Title>{title}</Card.Title>
              {description}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
}
