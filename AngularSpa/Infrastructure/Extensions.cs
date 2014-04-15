using System.Web.Mvc;

namespace AngularSpa.Infrastructure
{
    public static class Extensions
    {
        public static AngularTemplate AngularTemplate(this HtmlHelper helper, string templateId)
        {
            var tagBuilder = new TagBuilder("script");
            tagBuilder.Attributes.Add("type", "text/ng-template");
            tagBuilder.Attributes.Add("id", templateId);
            helper.ViewContext.Writer.Write(tagBuilder.ToString(TagRenderMode.StartTag));
            return new AngularTemplate(helper.ViewContext);
        }
    }
}