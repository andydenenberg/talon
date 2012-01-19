module SitesHelper
  
  def server_state_color(status)
    if status == 'SERVER_OK'
       color = 'success' 
    else
       color = 'warning'
    end
    return color
  end
    
end
