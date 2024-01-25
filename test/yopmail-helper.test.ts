import {describe, expect, test} from '@jest/globals';
import { inbox, linkOfFirstMail, mailDetails, mailDetailsHtml } from 'yopmail-helper';
describe('yopmail helper', () => {

  beforeEach(async ()=>{
    await delay(3000);
  })
  test('get inbox of a mail address', async () => {
    const mails = await inbox('admin01');
    expect(mails).not.toBeUndefined();
  });

  test('Read details of an email in text type', async () => {
    const mails = await inbox('admin01');
    const mailDetailsInfo = await mailDetails(mails[0].id,'admin01');

    expect(mailDetailsInfo).not.toBeUndefined();
  });

  test('Read details of an email in html type', async () => {
    const mails = await inbox('admin01');
    const mailDetailsHtmlInfo = await mailDetailsHtml(mails[0].id,'admin01');

    expect(mailDetailsHtmlInfo).not.toBeUndefined();
  });

  test('Read link of an email', async () => {
    const link = await linkOfFirstMail('admin01');

    expect(link).not.toBeUndefined();
  });

});

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
