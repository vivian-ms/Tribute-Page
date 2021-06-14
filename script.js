const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


const lakers_8 = [
  {
    date: '1996-06-26',
    title: 'Kobe is drafted',
    details: 'Kobe Bryant is selected by the Charlotte Hornets with the 13th pick of the 1st round of the NBA Draft',
    url: 'https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2016/01/15/kobe-bryant-lakers-retiring-1996-nba-draft.jpg?itok=6e8muWAD',
    alt: 'Kobe on draft night'
  },
  {
    date: '1996-07-11',
    title: 'Kobe becomes a Lakers',
    details: 'Kobe is traded to the Los Angeles Lakers for Vlade Divac',
    url: 'https://sports.cbsimg.net/images/visual/whatshot/kobe-draft.jpg',
    alt: 'Kobe Bryant becomes a Lakers'
  },
  {
    date: '2000-06-19',
    title: 'First championship',
    details: '21-year-old Kobe wins his first NBA title. Kobe averaged 15.6 points, 4.2 assists, and 4.6 rebounds in the 2000 NBA Finals, including a 26-point, 10-rebound performance in the deciding Game 6 against the Indiana Pacers',
    url: 'https://www.incimages.com/uploaded_files/image/970x450/getty_51549493_200013532000928048_87186.jpg',
    alt: 'Kobe and Shaq celebrates their first NBA title'
  },
  {
    date: '2001-06-15',
    title: 'Second consecutive title',
    details: 'Kobe and Shaq asserted themselves as the NBA\'s most dominant duo again, beating Allen Iverson and his Philadelphia 76ers in the Finals. Kobe finished with 26 points and 12 rebounds in Game 5 to win his second NBA title',
    url: 'https://d13csqd2kn0ewr.cloudfront.net/uploads/image/file/145665/cropped_Kobe_celebrates_his_second_NBA_championship__defeating_the_Philadlephia_76ers_in_five_games.__Reuters_-_MB_SV__June_15__2001.jpg?ts=1448922890',
    alt: 'Kobe celebrates with his second championship trophy'
  },
  {
    date: '2002-06-12',
    title: 'Three-peat',
    details: 'Behind Kobe\'s 26.8 points per game, the 2002-03 Lakers becomes only the fifth team in NBA history to win three consecutive championship after sweeping the New Jersey Nets in 4 games',
    url: 'https://images.performgroup.com/di/library/sportal_com_au/4c/9d/kobe-bryant_z8ubwjn436191s6gc7fy6wczs.jpg?t=227863060&quality=100',
    alt: 'Kobe celebrating with his third championship trophy'
  },
  {
    date: '2005-12-20',
    title: '62 points',
    details: 'Lakers beat the Dallas Mavericks 112 - 90 behind Kobe\'s 62 points. Kobe played 32 minutes and scored 62 points, outscoring the entire Mavericks team by one point (62 - 61) at the end of the third quarter',
    url: 'http://dsz7vodgjx60a.cloudfront.net/wp-content/uploads/2016/12/bil-kobe-62-correct.jpg',
    alt: 'Stats from the game Kobe scored 62 points'
  },
  {
    date: '2006-01-22',
    title: '81 points',
    details: 'Lakers beat the Toronto Raptors 122 - 104 in a comeback victory behind Kobe\'s 81 points, the most points in a game after Wilt Chamberlain\'s 100 points in 1962',
    url: 'https://i1.wp.com/basketballinterviews.com/wp-content/uploads/2020/04/screen-shot-2020-04-16-at-8.47.22-pm.png?fit=1188%2C777&ssl=1',
    alt: 'Kobe\'s on-court interview after scoring 81 points against the Toronto Raptors'
  }
];  // End lakers_8

const lakers_24 = [
  {
    date: ['2007-03-16', '2007-03-23'],
    title: 'Four straight games with 50+ points',
    details: 'Kobe put up four straight games of at least 50 points against the Portland Trailblazers (65), Minnesota Timberwolves (50), Memphis Grizzlies (60), and New Orleans/Oklahoma City Hornets (50) in March 2007',
    url: 'http://dsz7vodgjx60a.cloudfront.net/wp-content/uploads/2016/03/BIL-KOBE-50STREAK.jpg',
    alt: 'Stats from the four games Kobe scored 50+ points'
  },
  {
    date: '2009-06-14',
    title: 'Championship No. 4 (the first without Shaq)',
    details: 'Kobe led the Lakers over the Orlando Magic in five games, scoring at least 30 points in all but one game in the 2009 Finals',
    url: 'https://statics.sportskeeda.com/editor/2018/08/376d1-1535099854-800.jpg',
    alt: 'Kobe celebrating his fourth NBA championship'
  },
  {
    date: '2010-06-17',
    title: 'Five rings',
    details: 'Kobe averaged 28.6 points and 8 rebounds per game in the 2010 NBA finals against the Boston Celtics, claiming his fifth Larry O\'Brien Trophy',
    url: 'https://www.opencourt-basketball.com/wp-content/uploads/2020/08/kobe-4-rings.jpg',
    alt: 'Kobe celebrating his fifth NBA championship'
  },
  {
    date: '2013-04-12',
    title: 'Beginning of the fall',
    details: 'Kobe tears his Achilles tendon against the Golden State Warriors. With the Lakers fighting to get the eighth and final playoff spot in the Western Conference, Kobe began playing almost 48 minutes each game. His injury came after playing seven consecutive quarters and at least 40 minutes for seven consecutive games',
    url: 'http://www.opencourt-basketball.com/wp-content/uploads/2016/04/kobeachillesfreethrows.jpg',
    alt: 'Kobe getting ready to shoot free throws after tearing his Achilles'
  },
  {
    date: '2014-12-14',
    title: 'No. 3 on NBA\'s All Time Scoring List',
    details: 'During the Lakers\'s 100-94 road victory over Minnesota, Kobe hit a pair of free throws with 5:24 remaining in the 2nd quarter to pass Michael Jordan to claim the No. 3 spot',
    url: 'https://media1.s-nbcnews.com/j/newscms/2014_50/807896/141214-kobe-bryant-kns-2015_98d0f3b9cfb638b0b65d90b2b3ee5cd0.fit-760w.jpg',
    alt: 'Kobe thanking the Minnesota fans for acknowledging him for passing Michael Jordan on the NBA\'s All Time Scoring List'
  },
  {
    date: '2015-11-29',
    title: 'Retirement annoucement',
    details: 'Kobe posted a first-person poem titled "Dear Basketball" on the Players\' Tribune website announcing that 2015-16 would be his final season',
    url: 'http://4.bp.blogspot.com/-ffoKm7x4gk8/VnwKFZ2pWLI/AAAAAAAAC1M/P5qRqwQHz-o/s1600/kobe-bryant-announces-retirement-poem.jpg',
    alt: 'Kobe announces his retirement'
  },
  {
    date: '2016-04-13',
    title: 'Final game',
    details: 'Kobe scored 60 points on 22 of 50 shooting in his final game to help the Lakers defeat the Utah Jazz 101-96',
    url: 'https://i.ytimg.com/vi/GTJwoWHMEw0/maxresdefault.jpg',
    alt: 'Kobe addresses the crowd after dropping 60 points in his last game'
  }
];  // End lakers_24

const team_usa = [
  {
    date: '2008-08-24',
    title: 'First Olympic gold',
    details: 'Team USA invited Kobe to the Olympic team for the first time in 2008, where he captained the \'Redeem Team\' to gold, defeating Spain 118-107 in the final',
    url: 'https://losangeles.cbslocal.com/wp-content/uploads/sites/14984641/2016/01/gettyimages-82604032.jpg?w=1024&h=576&crop=1',
    alt: 'Kobe holding his first Olympic gold medal'
  },
  {
    date: '2012-08-12',
    title: 'Second Olympic gold',
    details: 'Kobe was one of five players from the 2008 Olympic team to return in 2012, where they scored a record 156 points against Nigeria in the first round and defeated Spain 100-78 in the gold-medal game',
    url: 'https://img.bleacherreport.net/img/images/photos/001/837/476/hi-res-150215345_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top',
    alt: 'Kobe holding his second Olympic gold medal'
  }
];  // End team_usa


const highlights = [
  '5x NBA champion (2000–2002, 2009, 2010)',
  '2x NBA Finals MVP (2009, 2010)',
  'NBA Most Valuable Player (2008)',
  '18x NBA All-Star (1998, 2000–2016)',
  '4x NBA All-Star Game MVP (2002, 2007, 2009, 2011)',
  '11x All-NBA First Team (2002–2004, 2006–2013)',
  '2x All-NBA Second Team (2000, 2001)',
  '2x All-NBA Third Team (1999, 2005)',
  '9x NBA All-Defensive First Team (2000, 2003, 2004, 2006–2011)',
  '3x NBA All-Defensive Second Team (2001, 2002, 2012)',
  '2x NBA scoring champion (2006, 2007)',
  'NBA Slam Dunk Contest champion (1997)',
  'NBA All-Rookie Second Team (1997)',
  'Naismith Prep Player of the Year (1996)',
  'Numbers 8 & 24 retired by Los Angeles Lakers'
];  // End highlights


const convertDate = date => {
  let year = date.slice(0, 4);
  let month = date.slice(5, 7);
  let day = date.slice(8, 10);

  return `${months[month - 1]} ${day}, ${year}`;
}


const createCards = (data, id) => {
  data.forEach(d => {
    if (!Array.isArray(d.date)) {
      $(`#${id} .timeline_list`).append(`
        <li class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <time datetime="${d.date}">${convertDate(d.date)}</time>
              <img class="img-fluid" src="${d.url}" alt="${d.alt}">
            </div>

            <div class="flip-card-back">
              <h5>${d.title}</h5>
              <p>${d.details}</p>
            </div>
          </div>
        </li>
      `);
    } else {
      $(`#${id} .timeline_list`).append(`
        <li class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div class="date-range">
                <time datetime="${d.date[0]}">${convertDate(d.date[0])}</time> - <time datetime="${d.date[1]}">${convertDate(d.date[1])}</time>
              </div>
              <img class="img-fluid" src="${d.url}" alt="${d.alt}">
            </div>

            <div class="flip-card-back">
              <h5>${d.title}</h5>
              <p>${d.details}</p>
            </div>
          </div>
        </li>
      `);
    }
  });
};  // End createCards()


$(function() {
  createCards(lakers_8, 'lakers_8');
  createCards(lakers_24, 'lakers_24');
  createCards(team_usa, 'team_usa');

  highlights.forEach(highlight => {
    $('#highlight-list').append(`<li>${highlight}</li>`);
  });

  // Collapse navbar when clicking nav-items or main document
  $('.navbar .nav-item:not(.dropdown), .dropdown-item, #main').on('click', function(evt) {
    $('.navbar-collapse').collapse('hide');
  });

  $('.flip-card').on({
    'mouseenter touchstart': function(evt) {
      evt.preventDefault();
      $(this).children('.flip-card-inner').addClass('flip-card-hover');
    },

    'mouseleave touchend': function(evt) {
      evt.preventDefault();
      $(this).children('.flip-card-inner').removeClass('flip-card-hover');
    }
  });  // End nav event listener
});
