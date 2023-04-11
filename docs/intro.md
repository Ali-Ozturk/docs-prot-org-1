---
customVar: foo
companyName: Anything here
---

import Testing from '@site/src/components/Testing';
import TableExample from '@site/src/components/TableExample';
import FetchDataTest from '@site/src/components/FetchDataTest';

# Testing

## Frontmatter Test

<ul>
  {Object.entries(frontMatter).map(([key, value]) => <li key={key}><b>{key}</b>: {value}</li>)}
  {frontMatter['customVar']}
</ul>

## Library Import Test (Loading component)

<Testing />

## Table Testing

<TableExample companyName={frontMatter['companyName']} />

## API Call Test

<FetchDataTest />

