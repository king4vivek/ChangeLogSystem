using Google.Apis.Auth;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChangeLogSystem.Projects.WebApi.Authorize
{
    public class GoogleAuthorizeAttribute : TypeFilterAttribute
    {
        public GoogleAuthorizeAttribute() : base(typeof(GoogleAuthorizeFilter)) { }
    }


    public class GoogleAuthorizeFilter : IAuthorizationFilter
    {

        public GoogleAuthorizeFilter()
        {

        }

        public async void OnAuthorization(AuthorizationFilterContext context)
        {
            try
            {
                var headers = context.HttpContext.Request.Headers;
                if (!headers.ContainsKey("Authorization"))
                {
                    context.Result = new ForbidResult();
                }
                var token = headers["Authorization"].ToString();

                if (string.IsNullOrWhiteSpace(token))
                {
                    context.Result = new ForbidResult();
                }
                var validated = await GoogleJsonWebSignature.ValidateAsync(token);
            }
            catch (Exception)
            {
                context.Result = new UnauthorizedResult();
            }
        }
    }
}
