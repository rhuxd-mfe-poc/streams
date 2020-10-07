import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardHeaderMain,
  CardTitle,
  Divider,
  Gallery,
  GalleryItem,
  PageSection,
  PageSectionVariants,
  Text,
  TextContent,
  Wizard
} from '@patternfly/react-core';

const wizardSteps = [
  { name: 'Select connector',
    component:
    <Gallery hasGutter>
      <GalleryItem>
        <Card className="pf-m-center-content" isSelectable={true}>
          <CardHeader>
            <CardHeaderMain>
              <img
                src="http://p7.hiclipart.com/preview/707/928/892/postgresql-logo-database-management-system-vector-graphics-sql-logo.jpg"
                alt="postgres db"
                style={{ height: '100px' }} />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>PostgresDB</CardTitle>
          <CardBody>Connection to SampleDB</CardBody>
        </Card>
      </GalleryItem>
      <GalleryItem>
        <Card className="pf-m-center-content" isSelectable={true}>
          <CardHeader>
            <CardHeaderMain>
              <img
                src="https://static.wixstatic.com/media/811ddc_20c16a8d6f3b4d7e83e5970b17026b4e~mv2.png"
                alt="mongo db"
                style={{ height: '100px' }} />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>MongoDB</CardTitle>
          <CardBody>Connection to SampleDB</CardBody>
        </Card>
      </GalleryItem>
      <GalleryItem>
        <Card className="pf-m-center-content" isSelectable={true}>
          <CardHeader>
            <CardHeaderMain>
              <img
                src="https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/uploads/2017/07/microsoft-sql-server595x3350_0.jpg?itok=W0KWNj4q"
                alt="SQL server"
                style={{ height: '100px' }} />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>MongoDB</CardTitle>
          <CardBody>Connection to SampleDB</CardBody>
        </Card>
      </GalleryItem>
      <GalleryItem>
        <Card className="pf-m-center-content" isSelectable={true}>
          <CardHeader>
            <CardHeaderMain>
              <img
                src="https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png"
                alt="mysql"
                style={{ height: '100px' }} />
            </CardHeaderMain>
          </CardHeader>
          <CardTitle>MongoDB</CardTitle>
          <CardBody>Connection to SampleDB</CardBody>
        </Card>
      </GalleryItem>
    </Gallery>
  },
  { name: 'Configure connection',
    component:
    <p>Step 2 content</p>
  },
  { name: 'Select tables',
    component:
    <p>Step 3 content</p>
  },
  { name: 'Data options',
    component:
    <p>Step 4 content</p>
  },
  { name: 'Runtime option',
    component:
    <p>Review step content</p>,
    nextButtonText: 'Finish'
  }
];

const wizardTitle = 'Basic wizard';

export const DebeziumPage = () => {
  return (
    <React.Fragment>
      <PageSection variant={PageSectionVariants.light}>
        <TextContent>
          <Text component="h1">Configure a connector</Text>
        </TextContent>
      </PageSection>
      <Divider />
      <PageSection padding={{md: 'noPadding'}}>
        <Wizard
          className='pf-m-color-scheme-light-200'
          navAriaLabel={`${wizardTitle} steps`}
          mainAriaLabel={`${wizardTitle} content`}
          steps={wizardSteps}
          // height={400}
        />
      </PageSection>
    </React.Fragment>
  );
}
