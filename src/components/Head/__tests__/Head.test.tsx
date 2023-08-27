import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { expect, test } from 'vitest';
import { Head } from '../Head';

// HeadComponentのテスト
test('should render a basic Head component', async () => {
  const title = 'Hello World';
  const titleSuffix = ' | Bulletproof React';
  const description = 'This is a description';

  // Headコンポーネントをレンダリング
  render(
    <HelmetProvider>
      <Head title={title} description={description} />
    </HelmetProvider>
  );
  // waitForは、指定した条件が満たされるまで待機する
  await waitFor(() => {
    expect(document.title).toBe(`${title}${titleSuffix}`);
    expect(document.querySelector("meta[name='description']")?.getAttribute('content')).toBe(
      description
    );
  });
});
