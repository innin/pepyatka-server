define([
  "globals",
  "app/app",
  "app/helpers/Components",
  "app/helpers/Handlebars",
  "app/helpers/Profile",
  "app/models/Comment",
  "app/models/Attachment",
  "app/models/Group",
  "app/models/Post",
  "app/models/Subscriber",
  "app/models/Tag",
  "app/models/Timeline",
  "app/models/Top",
  "app/models/User",
  "views/AboutView",
  "views/AudioPlayerView",
  "views/ApplicationView",
  "views/CommentFormView",
  "views/CommentPostViewSubst",
  "views/CreateCommentFieldView",
  "views/CreateGroupView",
  "views/EditCommentFieldView",
  "views/EditCommentFormView",
  "views/EditPostFormView",
  "views/ErrorView",
  "views/GroupsView",
  "views/JustStartedView",
  "views/LeaderboardView",
  "views/PaginationView",
  "views/PartialCommentView",
  "views/PartialLikeView",
  "views/PartialPostView",
  "views/PostView",
  "views/SearchView",
  "views/SendToFieldView",
  "views/SettingsView",
  "views/SigninView",
  "views/SignupView",
  "views/SubmitCommentButtonView",
  "views/SubscribersView",
  "views/SubscriptionsView",
  "views/TagsView",
  "views/TimelineView",
  "views/TopView",
  "views/UserTimelineView",
  "controllers/ApplicationController",
  "controllers/CometController",
  "controllers/CommentController",
  "controllers/ErrorController",
  "controllers/GroupsController",
  "controllers/PostController",
  "controllers/SearchController",
  "controllers/SettingsController",
  "controllers/SigninController",
  "controllers/SignupController",
  "controllers/SubscriberController",
  "controllers/SubscribersController",
  "controllers/TagsController",
  "controllers/TimelineController",
  "controllers/RssController",
  "app/router"
], function(globals, App) {
  return App;
});
