import { LandingPage, ReviewSearchPage, ReviewWritePage, ReviewConfirmationPage, ReviewThanksPage, getLocation } from './zoover_page_model';
import { Selector } from 'testcafe';

fixture `Zoover place review scenario`
    .page `https://www.zoover.nl/`;

const landingPage = new LandingPage();
const reviewSearchPage = new ReviewSearchPage();
const reviewWritePage = new ReviewWritePage();
const reviewConfirmationPage = new ReviewConfirmationPage();
const reviewThanksPage = new ReviewThanksPage();

test('Feedback test', async t => {

    let expectedHotelName = 'Royal Alhambra Palace'

    // landing page
    await t
        .click(landingPage.reviewButton)

    // review search page
    await t.expect(getLocation()).contains(reviewSearchPage.urlPath);
    await reviewSearchPage.searchHotel('royal palace');
    await t.click(reviewSearchPage.findHotel(expectedHotelName))

    // review write page
    await t
        .expect(getLocation()).contains(reviewWritePage.urlPath)
        .expect(reviewWritePage.title.innerText).contains('Zoover - Schrijf een review voor Hotel ' + expectedHotelName)

    // write review
    await t
        .typeText(reviewWritePage.fieldName, '[TEST]name')
        .click(reviewWritePage.fieldTravelWith('Alleen'))
        .click(reviewWritePage.fieldTravelYear('2019'))
        .click(reviewWritePage.fieldTravelMonth('januari'))
        .typeText(reviewWritePage.fieldReviewCommentText, 'Lorem ipsum dolor sit amet')
        .typeText(reviewWritePage.fieldReviewCommentSummary, 'Heel goed!')

    await reviewWritePage.placeReviewRatings('10')

    await t
        .typeText(reviewWritePage.email, 'test@test.test')
    await reviewWritePage.acceptTerms()
    await t.click(reviewWritePage.sendReviewButton)

    // feedback for organizer
    await t
        .expect(reviewConfirmationPage.thankYouText.textContent).contains('Bedankt')
        .click(reviewConfirmationPage.moreTripOrganizersToggle)
        .click(reviewConfirmationPage.tripOrganizer("Expedia"))
        .click(reviewConfirmationPage.reviewForOrganizer("10"))
        .click(reviewConfirmationPage.sendFeedbackButton)

    // check confirmation page
    await t
        .expect(reviewThanksPage.thankYouText.textContent).contains('Bedankt!')
        .expect(getLocation()).contains(reviewThanksPage.urlPath)
});