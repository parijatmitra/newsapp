import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "U.S. and allies tell citizens to leave Ukraine as Russia could invade 'at any time' - Reuters",
      description:
        "The United States and its allies urged their citizens to leave Ukraine right away to avoid a Russian invasion, including a possible air assault, that Washington said on Friday could occur anytime.",
      url: "https://www.reuters.com/world/europe/us-says-russia-masses-more-troops-near-ukraine-invasion-could-come-any-time-2022-02-11/",
      urlToImage:
        "https://www.reuters.com/resizer/fY-cJPLgMiXY8Xhy57mEty4cZio=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DQZXWVC2ZZJZJCSN543OQFCVVA.jpg",
      publishedAt: "2022-02-12T08:24:00Z",
      content:
        "WASHINGTON/MOSCOW, Feb 11 (Reuters) - The United States and its allies urged their citizens to leave Ukraine right away to avoid a Russian invasion, including a possible air assault, that Washington … [+5810 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Mark W. Sanchez",
      title:
        "Team USA youngsters snag win over rival Canada in men's Olympic hockey - New York Post ",
      description:
        "The NHL hockey stars are gone from these Olympics, but the American kids look ready to take advantage. The youngest team in the tournament went toe-to-toe, skate-to-skate with its chief rival, hold…",
      url: "https://nypost.com/2022/02/12/team-usa-snags-win-over-rival-canada-in-mens-hockey/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/02/USA.jpg?quality=90&strip=all&w=1024",
      publishedAt: "2022-02-12T06:48:00Z",
      content:
        "The hockey stars are gone from the Olympics, but the American kids look ready to take advantage.\r\nThe youngest team in the tournament went toe to toe, skate to skate with its chief rival and held off… [+2737 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Jesse O’Neill",
      title:
        "Supreme Court rejects NYC teachers' religious exemption appeal over vax mandate - New York Post ",
      description:
        "The Supreme Court on Friday shot down an appeal from a group of New York City school teachers who sought to block a COVID-19 vaccine mandate, arguing it violated their religious freedom.",
      url: "https://nypost.com/2022/02/12/supreme-court-rejects-nyc-teachers-religious-exemption-appeal-over-vax-mandate/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/02/newspress-collage-21185703-1644641925362.png?w=1024",
      publishedAt: "2022-02-12T05:24:00Z",
      content:
        "The Supreme Court on Friday shot down an appeal from a group of New York City school teachers who sought to block a COVID-19 vaccine mandate, arguing it violated their religious freedom.\r\nJustice Son… [+1364 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Graham Colton",
      title:
        "Freedom Convoy trucker: Canada's leftist politicians recognize convoy's 'incredible leverage,' fear its power - Fox News",
      description:
        'Gord Magill took stock of the Freedom Convoy\'s political power Friday on "The Ingraham Angle."',
      url: "https://www.foxnews.com/media/freedom-convoy-trucker-canadas-politicians-recognize-leverage-fear-power",
      urlToImage:
        "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/dd92eddd-4807-44d5-aef4-69187fcfdc69/6a4258e8-dcb9-456f-b439-5c2926f6b5b5/1280x720/match/image.jpg",
      publishedAt: "2022-02-12T05:12:54Z",
      content:
        'Freedom Convoy trucker Gord Magill flexed the convoy\'s political muscles Friday on "The Ingraham Angle."\r\nOntario Premier Doug Ford declared in Friday\'s state-of-emergency address, "We cannot I empha… [+2162 chars]',
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Annie Gasparro, Gabriel T. Rubin",
      title: "The Hidden Ways Companies Raise Prices - The Wall Street Journal",
      description:
        "Businesses are passing their rising costs on to consumers with new fees, truncated services and reduced contents in packaged goods, which don’t always show up in inflation data",
      url: "https://www.wsj.com/articles/companies-hidden-inflation-consumer-price-index-11644549254",
      urlToImage: "https://images.wsj.net/im-484703/social",
      publishedAt: "2022-02-12T05:03:00Z",
      content:
        "Lettuce Entertain You Enterprises Inc., a Chicago-based restaurant group, has added a 3% processing fee to checks at many of its restaurants. \r\nHarley-Davidson Inc.\r\nadded a charge last year to its m… [+12155 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "Kylie Jenner Announces The Name Of Her Second Child - NDTV Movies",
      description: "Kylie Jenner announced the name of her second baby",
      url: "https://www.ndtv.com/entertainment/kylie-jenner-announces-the-name-of-her-second-child-2764123",
      urlToImage:
        "https://c.ndtvimg.com/2022-02/m5ajvbig_kylie-jenner_625x300_12_February_22.jpg",
      publishedAt: "2022-02-12T04:21:39Z",
      content:
        "Kylie Jenner posted this. (Image courtesy: kyliejenner)\r\nHighlights\r\n<ul><li>Kylie Jenner shared an Instagram story\r\n</li><li>She made the news official on Saturday\r\n</li><li>Kylie Jenner and Travis … [+2256 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "At Least Five Journalist Killed In Mexico - NBC News",
      description:
        "At least five Mexican reporters have been killed so far in Mexico. NBC News' Zinhle Essamuah takes the look into the string of journalist killings that has m...",
      url: "https://www.youtube.com/watch?v=B-AFqt8keKA",
      urlToImage: "https://i.ytimg.com/vi/B-AFqt8keKA/maxresdefault.jpg",
      publishedAt: "2022-02-12T04:00:02Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Detroit Free Press",
      },
      author: "Kristen Jordan Shamus, Detroit Free Press",
      title:
        "Wayne County, 9 others announce they will drop school mask mandates by end of the month - Detroit Free Press",
      description:
        "Starting Feb. 28, students who attend K-12 schools and those enrolled at day care centers in Oakland County will no longer have to wear masks.",
      url: "https://www.freep.com/story/news/local/michigan/oakland/2022/02/11/oakland-county-school-mask-mandate-covid-19/6749972001/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/01/03/PDTF/00741623-9b29-4c9a-9eea-b02932122bf5-IMG_Various_Purchased_An_1_.JPG?auto=webp&crop=5999,3375,x0,y305&format=pjpg&width=1200",
      publishedAt: "2022-02-12T03:22:30Z",
      content:
        "In the span of two days, 10 Michigan counties with mask mandates for K-12 schools announced they'll drop the requirements before the end of the month. \r\nWayne, Oakland and Washtenaw counties all said… [+8012 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Nearly a third of adults over 65 have medical conditions after COVID-19 - The Jerusalem Post",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiRGh0dHBzOi8vd3d3Lmpwb3N0LmNvbS9oZWFsdGgtYW5kLXdlbGxuZXNzL2Nvcm9uYXZpcnVzL2FydGljbGUtNjk2MjMz0gEA?oc=5",
      urlToImage: null,
      publishedAt: "2022-02-12T03:01:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "AZCentral",
      },
      author:
        "Anne Ryman, Chelsea Curtis and BrieAnna J. Frank, The Arizona Republic",
      title:
        "9 Phoenix officers injured and suspect, woman dead: What we know about the police shooting - The Arizona Republic",
      description:
        "Phoenix police said five officers were shot and four others were injured by bullet shrapnel during a barricade situation at a Phoenix home.",
      url: "https://www.azcentral.com/story/news/local/phoenix/2022/02/11/phoenix-police-shooting-ambush-what-we-know/6750450001/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/02/11/PPHX/2ad1aca3-0612-409c-885b-99c43cc5834b-St._Josphs_Wreath_0051.JPG?auto=webp&crop=4125,2321,x0,y409&format=pjpg&width=1200",
      publishedAt: "2022-02-12T03:00:00Z",
      content:
        "A 911 call early Friday morning that a woman had been shot at a home in southwest Phoenix turned into a barricade standoff where nine officers were injured in a hail of gunfire. Two people inside the… [+6048 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Fox News Staff",
      title:
        "Joe Rogan is 'unstoppable' after confronting cancel culture: Concha - Fox News",
      description:
        "Fox News contributor Joe Concha explains how the left couldn't cancel Joe Rogan.",
      url: "https://www.foxnews.com/media/joe-rogan-unstoppable-beating-cancel-culture-concha",
      urlToImage:
        "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/ad3dd675-4a09-4768-99fd-107ff6a18181/c4f36083-43c8-4c62-9fb3-eb40cf27933a/1280x720/match/image.jpg",
      publishedAt: "2022-02-12T02:26:43Z",
      content:
        'Fox News contributor Joe Concha told "Jesse Watters Primetime" on Friday that Joe Rogan is "bigger than ever" after confronting cancel culture.\r\nJOE CONCHA:That is one hundred percent the playbook: N… [+1010 chars]',
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Maite Fernández Simon, Adela Suliman, Andrew Jeong",
      title:
        "Judge orders protesters to end blockade of Ambassador Bridge; Ontario premier declares state of emergency, threatens fines, prison time - The Washington Post",
      description:
        "“We’re now two weeks into the siege of the city of Ottawa,” Premier Doug Ford said. “I call it a siege because that’s what it is. It’s an illegal occupation. This is no longer a protest.”",
      url: "https://www.washingtonpost.com/world/2022/02/11/canada-freedom-convoy-trudeau-truckers-blockade/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/OMKVZ4ULNAI6ZA4PBT67NHGOHQ.jpg&w=1440",
      publishedAt: "2022-02-12T02:18:36Z",
      content:
        "Ontario Superior Court Chief Justice Geoffrey Morawetz gave protesters until 7 p.m. to end the blockade at the Ambassador Bridge connecting Windsor, Ontario, and Detroit, the busiest crossing on the … [+7155 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: null,
      title:
        "Billionaire developer Caruso enters Los Angeles mayor's race - POLITICO",
      description:
        "The builder of luxury malls is poised run an expensive, self-funded campaign.",
      url: "https://www.politico.com/news/2022/02/11/caruso-enters-los-angeles-mayors-race-00008420",
      urlToImage:
        "https://static.politico.com/bc/37/876223b6421ca0f5533f2c673b0e/20220211-rickcaruso-getty-773.jpg",
      publishedAt: "2022-02-12T01:57:06Z",
      content:
        "Shifting toward the center: LAs mayoral race has so far been dominated by policy proposals featuringmore conservative approaches to public safety and homelessness, even as progressives like Bass and … [+1147 chars]",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "2022 Super Bowl pick, odds, props and best bets: Rams smash Bengals, Stafford wins MVP - CBS Sports",
      description: "Will Brinson's Super Bowl pick, props and best bets",
      url: "https://www.cbssports.com/nfl/news/2022-super-bowl-pick-odds-props-and-best-bets-rams-smash-bengals-stafford-wins-mvp/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2022/02/06/dfc5176f-8d93-4dd7-85b2-b5bdf620be9c/thumbnail/1200x675/c15b40cccc7f356b0bbae1e5f9ffd94b/0206-rams.jpg",
      publishedAt: "2022-02-12T00:29:00Z",
      content:
        "This truly is the most unusual Super Bowl -- a West Coast matchup of two teams no one thought would end up here, minimal in-week storylines and the odd setting of Los Angeles, a city largely unaffect… [+3930 chars]",
    },
    {
      source: {
        id: null,
        name: "KTLA Los Angeles",
      },
      author: "Michael Bartiromo, Nexstar Media Wire",
      title:
        "Bob Saget autopsy report shows multiple fractures, hemorrhaging near brain - KTLA Los Angeles",
      description:
        "The report, shared with Nexstar by the office of the Orange County Medical Examiner, further concluded that Saget was COVID-19 positive at the time of his death on Jan. 9, though his respiratory system showed no signs of chronic or acute inflammation.",
      url: "https://ktla.com/news/nationworld/bob-saget-autopsy-report-shows-multiple-fractures-hemorrhaging-near-brain/",
      urlToImage:
        "https://ktla.com/wp-content/uploads/sites/4/2022/02/BobSagetAP22041031809601.jpg?w=1280",
      publishedAt: "2022-02-12T00:19:06Z",
      content:
        "An autopsy report for Bob Saget has determined the comedians cause of death to be blunt head trauma that resulted in multiple fractures to the skull and hemorrhaging near the brain.\r\nThe report, shar… [+1926 chars]",
    },
    {
      source: {
        id: null,
        name: "PEOPLE",
      },
      author: "Julie Mazziotta",
      title:
        "COVID Can Destroy the Placenta and Cause Stillbirths During Pregnancy in Rare Cases - PEOPLE",
      description:
        "The CDC has urged pregnant people to get vaccinated against COVID-19 because of the potential risks to the mother and fetus",
      url: "https://people.com/health/covid-can-destroy-the-placenta-and-cause-stillbirths-during-pregnancy-in-rare-cases/",
      urlToImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=1500&h=750&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2022%2F02%2F11%2FCOVID-Pregnancy.jpg",
      publishedAt: "2022-02-11T22:56:00Z",
      content:
        "COVID-19 can destroy the placenta and lead to stillbirths during pregnancy in rare cases, according to new research, further highlighting the potential risks of the virus to the mother and fetus.\r\nTh… [+2812 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Sheryl Gay Stolberg, Rebecca Robbins",
      title:
        "F.D.A. Clears Monoclonal Antibody Drug From Eli Lilly - The New York Times",
      description:
        "The federal government has ordered 600,000 doses of the monoclonal antibody treatment, which is meant for high-risk Covid patients early in their illness.",
      url: "https://www.nytimes.com/2022/02/11/us/politics/eli-lilly-antibody-treatment-covid.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/02/11/multimedia/11virus-briefing-EliLilly/11virus-briefing-EliLilly-facebookJumbo.jpg",
      publishedAt: "2022-02-11T22:48:19Z",
      content:
        "The study also enrolled higher-risk people, some of whom were vaccinated, and examined whether the drug was safe for them. Across the companys safety studies, the drug was found to cause rare instanc… [+1868 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Caitlin McFall",
      title:
        "DHS moves to counter truck convoy in US ahead of Super Bowl Sunday amid trucker protests - Fox News",
      description:
        'White House press secretary Jen Psaki said Friday the Department of Homeland Security (DHS) had deployed 500 employees and is "surging additional staff" in coordination with California police forces to prevent disruptions at the Super Bowl in response to an i…',
      url: "https://www.foxnews.com/politics/dhs-moves-counter-truck-convoy-u-s-super-bowl-sunday-trucker-protests",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/02/Truck-backup-1.jpg",
      publishedAt: "2022-02-11T22:45:05Z",
      content:
        'White House press secretary Jen Psaki said Friday the Department of Homeland Security (DHS) had deployed 500 employees and is "surging additional staff" in coordination with California police forces … [+2242 chars]',
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Caitlin McCabe, Anna Hirtenstein",
      title:
        "Stocks Slide Amid Ukraine Concerns, Inflation Data - The Wall Street Journal",
      description:
        "All three major U.S. indexes turn in weekly loss; Brent crude oil hits highest since 2014",
      url: "https://www.wsj.com/articles/global-stocks-markets-dow-update-02-11-2022-11644568508",
      urlToImage: "https://images.wsj.net/im-484321/social",
      publishedAt: "2022-02-11T22:05:00Z",
      content:
        "U.S. stocks and bond yields sank Friday, as growing tensions between Russia and Ukraine sent investors flocking to safer assets. All three major U.S. stock indexes finished the day lower, capping ano… [+5191 chars]",
    },
    {
      source: {
        id: null,
        name: "NetsDaily",
      },
      author: "Matthew Brooks, Chris Milholen",
      title:
        "Sean Marks on Ben Simmons: ‘He was ecstatic about the circumstances he’s walking into and so are we’ - NetsDaily",
      description:
        "Sean Marks spoke to reporters on Friday afternoon for the first time since bringing Kyrie Irving back into the fold as a part-time player. His Nets were, of course, just 24 hours removed from...",
      url: "https://www.netsdaily.com/2022/2/11/22929494/sean-marks-on-ben-simmons-he-was-ecstatic-about-the-circumstances-hes-walking-into-and-so-are-we",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/0m25_LQlB1lwRp6LMq-bGip73Kw=/702x376:4119x2165/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23235898/1233568676.jpg",
      publishedAt: "2022-02-11T22:00:40Z",
      content:
        "Sean Marks spoke to reporters on Friday afternoon for the first time since bringing Kyrie Irving back into the fold as a part-time player. His Nets were, of course, just 24 hours removed from dealing… [+8831 chars]",
    },
  ];
  constructor() {
    super();
   
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
      let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9d54ce1bff4e46408f1a59336bd083b1";
      let data = await fetch(url);
      let parseData = await data.json;
      this.setState({articles: parseData.articles});



  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h2>Top Headlines</h2>
         
          <div className="row">
          {this.state.articles.map((element)=>{
            return  <div className="col-md-4"  key={element.url}>
            <NewsItem
           
              title={element.title}
              description={element.description}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
            />
          </div>

            })}
            
           
          </div>

         
        </div>
      </>
    );
  }
}

export default News;
