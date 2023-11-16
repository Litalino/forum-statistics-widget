import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';

import ForumStatisticsWidget from './components/ForumStatisticsWidget';

export default function (app) {
  new Widgets()
    .add({
      key: 'FofForumStatistic',
      component: ForumStatisticsWidget,
      isDisabled: false,
      isUnique: true,
      placement: 'end',
      position: 1,
    })
    .extend(app, 'fof-forum-statistics-widget');
}